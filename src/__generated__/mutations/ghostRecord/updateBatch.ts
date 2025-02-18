import { builder } from "src/builder";

import { GhostRecordUpdate } from "../../types/inputs/ghostRecord/update";
import { GhostRecordWhereUnique } from "../../types/inputs/ghostRecord/whereUnique";
import { GhostRecord } from "../../types/objects/ghostRecord";

builder.mutationField("ghostRecordUpdateBatch", (t) =>
  t.field({
    type: [GhostRecord],
    nullable: false,
    args: {
      where: t.arg({ type: [GhostRecordWhereUnique], required: true }),
      data: t.arg({ type: [GhostRecordUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.ghostRecord.update({ where, data });
        }),
      );
    },
  }),
);
