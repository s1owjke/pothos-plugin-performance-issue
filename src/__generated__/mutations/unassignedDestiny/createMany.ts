import { builder } from "src/builder";

import { UnassignedDestinyCreateMany } from "../../types/inputs/unassignedDestiny/createMany";

builder.mutationField("unassignedDestinyCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [UnassignedDestinyCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unassignedDestiny.createMany({ data: args.data });
      return count;
    },
  }),
);
