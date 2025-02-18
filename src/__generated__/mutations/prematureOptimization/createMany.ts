import { builder } from "src/builder";

import { PrematureOptimizationCreateMany } from "../../types/inputs/prematureOptimization/createMany";

builder.mutationField("prematureOptimizationCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [PrematureOptimizationCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.prematureOptimization.createMany({ data: args.data });
      return count;
    },
  }),
);
