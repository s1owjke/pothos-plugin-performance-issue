import { builder } from "src/builder";

import { GhostRecordUpdate } from "../../types/inputs/ghostRecord/update";
import { GhostRecordWhereUnique } from "../../types/inputs/ghostRecord/whereUnique";
import { GhostRecord } from "../../types/objects/ghostRecord";

builder.mutationField("ghostRecordUpdate", (t) =>
  t.field({
    type: GhostRecord,
    nullable: false,
    args: {
      where: t.arg({ type: GhostRecordWhereUnique, required: true }),
      data: t.arg({ type: GhostRecordUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.ghostRecord.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
