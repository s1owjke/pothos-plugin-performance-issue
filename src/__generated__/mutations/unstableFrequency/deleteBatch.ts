import { builder } from "src/builder";

import { UnstableFrequencyWhereUnique } from "../../types/inputs/unstableFrequency/whereUnique";

builder.mutationField("unstableFrequencyDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [UnstableFrequencyWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.unstableFrequency.delete({ where })));
      return true;
    },
  }),
);
