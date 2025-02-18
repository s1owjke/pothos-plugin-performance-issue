import { builder } from "src/builder";

import { ParallelRealityUpdate } from "../../types/inputs/parallelReality/update";
import { ParallelRealityWhereUnique } from "../../types/inputs/parallelReality/whereUnique";
import { ParallelReality } from "../../types/objects/parallelReality";

builder.mutationField("parallelRealityUpdate", (t) =>
  t.field({
    type: ParallelReality,
    nullable: false,
    args: {
      where: t.arg({ type: ParallelRealityWhereUnique, required: true }),
      data: t.arg({ type: ParallelRealityUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.parallelReality.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
