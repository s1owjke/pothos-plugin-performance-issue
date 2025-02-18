import { builder } from "src/builder";

import { ParallelRealityCreateMany } from "../../types/inputs/parallelReality/createMany";

builder.mutationField("parallelRealityCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [ParallelRealityCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.parallelReality.createMany({ data: args.data });
      return count;
    },
  }),
);
