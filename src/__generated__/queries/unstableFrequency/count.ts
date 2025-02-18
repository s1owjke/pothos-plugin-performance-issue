import { builder } from "src/builder";

import { UnstableFrequencyWhere } from "../../types/inputs/unstableFrequency/where";

builder.queryField("unstableFrequencyCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnstableFrequencyWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.unstableFrequency.count({ where: args.where || undefined });
    },
  }),
);
