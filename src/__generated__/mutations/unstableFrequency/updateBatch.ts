import { builder } from "src/builder";

import { UnstableFrequencyUpdate } from "../../types/inputs/unstableFrequency/update";
import { UnstableFrequencyWhereUnique } from "../../types/inputs/unstableFrequency/whereUnique";
import { UnstableFrequency } from "../../types/objects/unstableFrequency";

builder.mutationField("unstableFrequencyUpdateBatch", (t) =>
  t.field({
    type: [UnstableFrequency],
    nullable: false,
    args: {
      where: t.arg({ type: [UnstableFrequencyWhereUnique], required: true }),
      data: t.arg({ type: [UnstableFrequencyUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.unstableFrequency.update({ where, data });
        }),
      );
    },
  }),
);
