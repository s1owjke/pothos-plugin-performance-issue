import { builder } from "src/builder";

import { UnstableFrequencyCreateMany } from "../../types/inputs/unstableFrequency/createMany";

builder.mutationField("unstableFrequencyCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [UnstableFrequencyCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unstableFrequency.createMany({ data: args.data });
      return count;
    },
  }),
);
