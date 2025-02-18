import { builder } from "src/builder";

import { UnstableFrequencyCreate } from "../../types/inputs/unstableFrequency/create";
import { UnstableFrequency } from "../../types/objects/unstableFrequency";

builder.mutationField("unstableFrequencyCreateBatch", (t) =>
  t.field({
    type: [UnstableFrequency],
    nullable: false,
    args: {
      data: t.arg({ type: [UnstableFrequencyCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.unstableFrequency.create({ data })));
    },
  }),
);
