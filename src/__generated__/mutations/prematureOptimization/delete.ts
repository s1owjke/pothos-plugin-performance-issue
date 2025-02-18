import { builder } from "src/builder";

import { PrematureOptimizationWhereUnique } from "../../types/inputs/prematureOptimization/whereUnique";

builder.mutationField("prematureOptimizationDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: PrematureOptimizationWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.prematureOptimization.delete({ where: args.where });
      return true;
    },
  }),
);
