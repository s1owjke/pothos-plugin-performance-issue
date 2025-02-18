import { builder } from "src/builder";

import { RedundantDuplicationCreateMany } from "../../types/inputs/redundantDuplication/createMany";

builder.mutationField("redundantDuplicationCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [RedundantDuplicationCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.redundantDuplication.createMany({ data: args.data });
      return count;
    },
  }),
);
