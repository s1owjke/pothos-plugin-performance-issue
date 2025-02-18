import { builder } from "src/builder";

import { ParallelRealityUpdateMany } from "../../types/inputs/parallelReality/updateMany";
import { ParallelRealityWhere } from "../../types/inputs/parallelReality/where";

builder.mutationField("parallelRealityUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ParallelRealityWhere, required: true }),
      data: t.arg({ type: ParallelRealityUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.parallelReality.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
