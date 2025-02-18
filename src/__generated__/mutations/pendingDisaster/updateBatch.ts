import { builder } from "src/builder";

import { PendingDisasterUpdate } from "../../types/inputs/pendingDisaster/update";
import { PendingDisasterWhereUnique } from "../../types/inputs/pendingDisaster/whereUnique";
import { PendingDisaster } from "../../types/objects/pendingDisaster";

builder.mutationField("pendingDisasterUpdateBatch", (t) =>
  t.field({
    type: [PendingDisaster],
    nullable: false,
    args: {
      where: t.arg({ type: [PendingDisasterWhereUnique], required: true }),
      data: t.arg({ type: [PendingDisasterUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.pendingDisaster.update({ where, data });
        }),
      );
    },
  }),
);
