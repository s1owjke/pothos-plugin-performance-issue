import { builder } from "src/builder";

import { RedundantDuplicationWhereUnique } from "../../types/inputs/redundantDuplication/whereUnique";

builder.mutationField("redundantDuplicationDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [RedundantDuplicationWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.redundantDuplication.delete({ where })));
      return true;
    },
  }),
);
