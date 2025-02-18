import { builder } from "src/builder";

import { ParallelRealityWhere } from "../../types/inputs/parallelReality/where";

builder.queryField("parallelRealityCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ParallelRealityWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.parallelReality.count({ where: args.where || undefined });
    },
  }),
);
