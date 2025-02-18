import { builder } from "src/builder";

import { UnstableFrequencyWhereUnique } from "../../types/inputs/unstableFrequency/whereUnique";

builder.mutationField("unstableFrequencyDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: UnstableFrequencyWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.unstableFrequency.delete({ where: args.where });
      return true;
    },
  }),
);
