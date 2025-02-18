import { builder } from "src/builder";

import { LostAndNeverFoundUpdate } from "../../types/inputs/lostAndNeverFound/update";
import { LostAndNeverFoundWhereUnique } from "../../types/inputs/lostAndNeverFound/whereUnique";
import { LostAndNeverFound } from "../../types/objects/lostAndNeverFound";

builder.mutationField("lostAndNeverFoundUpdateBatch", (t) =>
  t.field({
    type: [LostAndNeverFound],
    nullable: false,
    args: {
      where: t.arg({ type: [LostAndNeverFoundWhereUnique], required: true }),
      data: t.arg({ type: [LostAndNeverFoundUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.lostAndNeverFound.update({ where, data });
        }),
      );
    },
  }),
);
