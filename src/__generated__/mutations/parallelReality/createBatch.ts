import { builder } from "src/builder";

import { ParallelRealityCreate } from "../../types/inputs/parallelReality/create";
import { ParallelReality } from "../../types/objects/parallelReality";

builder.mutationField("parallelRealityCreateBatch", (t) =>
  t.field({
    type: [ParallelReality],
    nullable: false,
    args: {
      data: t.arg({ type: [ParallelRealityCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.parallelReality.create({ data })));
    },
  }),
);
