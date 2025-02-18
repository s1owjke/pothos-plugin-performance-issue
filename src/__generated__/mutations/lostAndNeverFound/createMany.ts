import { builder } from "src/builder";

import { LostAndNeverFoundCreateMany } from "../../types/inputs/lostAndNeverFound/createMany";

builder.mutationField("lostAndNeverFoundCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [LostAndNeverFoundCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.lostAndNeverFound.createMany({ data: args.data });
      return count;
    },
  }),
);
