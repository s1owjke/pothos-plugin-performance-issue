import { builder } from "src/builder";

import { UnstableFrequencyWhere } from "../../types/inputs/unstableFrequency/where";

builder.mutationField("unstableFrequencyDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnstableFrequencyWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unstableFrequency.deleteMany({ where: args.where });
      return count;
    },
  }),
);
