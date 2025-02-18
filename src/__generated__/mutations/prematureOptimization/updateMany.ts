import { builder } from "src/builder";

import { PrematureOptimizationUpdateMany } from "../../types/inputs/prematureOptimization/updateMany";
import { PrematureOptimizationWhere } from "../../types/inputs/prematureOptimization/where";

builder.mutationField("prematureOptimizationUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: PrematureOptimizationWhere, required: true }),
      data: t.arg({ type: PrematureOptimizationUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.prematureOptimization.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
