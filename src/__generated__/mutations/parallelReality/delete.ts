import { builder } from "src/builder";

import { ParallelRealityWhereUnique } from "../../types/inputs/parallelReality/whereUnique";

builder.mutationField("parallelRealityDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: ParallelRealityWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.parallelReality.delete({ where: args.where });
      return true;
    },
  }),
);
