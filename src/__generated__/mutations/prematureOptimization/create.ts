import { builder } from "src/builder";

import { PrematureOptimizationCreate } from "../../types/inputs/prematureOptimization/create";
import { PrematureOptimization } from "../../types/objects/prematureOptimization";

builder.mutationField("prematureOptimizationCreate", (t) =>
  t.field({
    type: PrematureOptimization,
    nullable: false,
    args: {
      data: t.arg({ type: PrematureOptimizationCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.prematureOptimization.create({ data: args.data });
    },
  }),
);
