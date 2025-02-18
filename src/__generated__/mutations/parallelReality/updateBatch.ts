import { builder } from "src/builder";

import { ParallelRealityUpdate } from "../../types/inputs/parallelReality/update";
import { ParallelRealityWhereUnique } from "../../types/inputs/parallelReality/whereUnique";
import { ParallelReality } from "../../types/objects/parallelReality";

builder.mutationField("parallelRealityUpdateBatch", (t) =>
  t.field({
    type: [ParallelReality],
    nullable: false,
    args: {
      where: t.arg({ type: [ParallelRealityWhereUnique], required: true }),
      data: t.arg({ type: [ParallelRealityUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.parallelReality.update({ where, data });
        }),
      );
    },
  }),
);
