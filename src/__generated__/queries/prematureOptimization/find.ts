import { builder } from "src/builder";

import { PrematureOptimizationWhereUnique } from "../../types/inputs/prematureOptimization/whereUnique";
import { PrematureOptimization } from "../../types/objects/prematureOptimization";

builder.queryField("prematureOptimization", (t) =>
  t.prismaField({
    type: PrematureOptimization,
    nullable: true,
    args: {
      where: t.arg({ type: PrematureOptimizationWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.prematureOptimization.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
