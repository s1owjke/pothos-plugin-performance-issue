import { builder } from "src/builder";

import { PrematureOptimizationWhere } from "../../types/inputs/prematureOptimization/where";

builder.queryField("prematureOptimizationCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: PrematureOptimizationWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.prematureOptimization.count({ where: args.where || undefined });
    },
  }),
);
