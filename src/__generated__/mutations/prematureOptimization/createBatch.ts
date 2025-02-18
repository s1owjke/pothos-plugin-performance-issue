import { builder } from "src/builder";

import { PrematureOptimizationCreate } from "../../types/inputs/prematureOptimization/create";
import { PrematureOptimization } from "../../types/objects/prematureOptimization";

builder.mutationField("prematureOptimizationCreateBatch", (t) =>
  t.field({
    type: [PrematureOptimization],
    nullable: false,
    args: {
      data: t.arg({ type: [PrematureOptimizationCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.prematureOptimization.create({ data })));
    },
  }),
);
