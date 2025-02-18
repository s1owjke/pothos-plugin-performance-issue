import { builder } from "src/builder";

import { ParallelRealityWhereUnique } from "../../types/inputs/parallelReality/whereUnique";

builder.mutationField("parallelRealityDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [ParallelRealityWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.parallelReality.delete({ where })));
      return true;
    },
  }),
);
