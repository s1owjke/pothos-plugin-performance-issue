import { builder } from "src/builder";

import { PrematureOptimizationUpdate } from "../../types/inputs/prematureOptimization/update";
import { PrematureOptimizationWhereUnique } from "../../types/inputs/prematureOptimization/whereUnique";
import { PrematureOptimization } from "../../types/objects/prematureOptimization";

builder.mutationField("prematureOptimizationUpdateBatch", (t) =>
  t.field({
    type: [PrematureOptimization],
    nullable: false,
    args: {
      where: t.arg({ type: [PrematureOptimizationWhereUnique], required: true }),
      data: t.arg({ type: [PrematureOptimizationUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.prematureOptimization.update({ where, data });
        }),
      );
    },
  }),
);
