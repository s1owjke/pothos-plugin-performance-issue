import { builder } from "src/builder";

import { PrematureOptimizationWhereUnique } from "../../types/inputs/prematureOptimization/whereUnique";

builder.mutationField("prematureOptimizationDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [PrematureOptimizationWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.prematureOptimization.delete({ where })));
      return true;
    },
  }),
);
