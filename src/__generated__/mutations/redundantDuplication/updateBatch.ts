import { builder } from "src/builder";

import { RedundantDuplicationUpdate } from "../../types/inputs/redundantDuplication/update";
import { RedundantDuplicationWhereUnique } from "../../types/inputs/redundantDuplication/whereUnique";
import { RedundantDuplication } from "../../types/objects/redundantDuplication";

builder.mutationField("redundantDuplicationUpdateBatch", (t) =>
  t.field({
    type: [RedundantDuplication],
    nullable: false,
    args: {
      where: t.arg({ type: [RedundantDuplicationWhereUnique], required: true }),
      data: t.arg({ type: [RedundantDuplicationUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.redundantDuplication.update({ where, data });
        }),
      );
    },
  }),
);
