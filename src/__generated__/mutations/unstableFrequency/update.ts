import { builder } from "src/builder";

import { UnstableFrequencyUpdate } from "../../types/inputs/unstableFrequency/update";
import { UnstableFrequencyWhereUnique } from "../../types/inputs/unstableFrequency/whereUnique";
import { UnstableFrequency } from "../../types/objects/unstableFrequency";

builder.mutationField("unstableFrequencyUpdate", (t) =>
  t.field({
    type: UnstableFrequency,
    nullable: false,
    args: {
      where: t.arg({ type: UnstableFrequencyWhereUnique, required: true }),
      data: t.arg({ type: UnstableFrequencyUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.unstableFrequency.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
