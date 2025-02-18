import { builder } from "src/builder";

import { ParallelRealityWhere } from "../../types/inputs/parallelReality/where";

builder.mutationField("parallelRealityDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ParallelRealityWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.parallelReality.deleteMany({ where: args.where });
      return count;
    },
  }),
);
