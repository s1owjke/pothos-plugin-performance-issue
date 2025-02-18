import { builder } from "src/builder";

import { UnstableFrequencyUpdateMany } from "../../types/inputs/unstableFrequency/updateMany";
import { UnstableFrequencyWhere } from "../../types/inputs/unstableFrequency/where";

builder.mutationField("unstableFrequencyUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnstableFrequencyWhere, required: true }),
      data: t.arg({ type: UnstableFrequencyUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unstableFrequency.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
