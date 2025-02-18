import { builder } from "src/builder";

import { UnstableFrequencyWhereUnique } from "../../types/inputs/unstableFrequency/whereUnique";
import { UnstableFrequency } from "../../types/objects/unstableFrequency";

builder.queryField("unstableFrequency", (t) =>
  t.prismaField({
    type: UnstableFrequency,
    nullable: true,
    args: {
      where: t.arg({ type: UnstableFrequencyWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.unstableFrequency.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
