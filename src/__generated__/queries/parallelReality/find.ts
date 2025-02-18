import { builder } from "src/builder";

import { ParallelRealityWhereUnique } from "../../types/inputs/parallelReality/whereUnique";
import { ParallelReality } from "../../types/objects/parallelReality";

builder.queryField("parallelReality", (t) =>
  t.prismaField({
    type: ParallelReality,
    nullable: true,
    args: {
      where: t.arg({ type: ParallelRealityWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.parallelReality.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
