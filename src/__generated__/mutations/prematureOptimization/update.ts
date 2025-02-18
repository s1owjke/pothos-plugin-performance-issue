import { builder } from "src/builder";

import { PrematureOptimizationUpdate } from "../../types/inputs/prematureOptimization/update";
import { PrematureOptimizationWhereUnique } from "../../types/inputs/prematureOptimization/whereUnique";
import { PrematureOptimization } from "../../types/objects/prematureOptimization";

builder.mutationField("prematureOptimizationUpdate", (t) =>
  t.field({
    type: PrematureOptimization,
    nullable: false,
    args: {
      where: t.arg({ type: PrematureOptimizationWhereUnique, required: true }),
      data: t.arg({ type: PrematureOptimizationUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.prematureOptimization.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
