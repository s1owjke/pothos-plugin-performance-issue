import { builder } from "src/builder";

import { PrematureOptimizationWhere } from "../../types/inputs/prematureOptimization/where";

builder.mutationField("prematureOptimizationDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: PrematureOptimizationWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.prematureOptimization.deleteMany({ where: args.where });
      return count;
    },
  }),
);
