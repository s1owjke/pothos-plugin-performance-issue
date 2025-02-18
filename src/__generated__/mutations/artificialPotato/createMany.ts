import { builder } from "src/builder";

import { ArtificialPotatoCreateMany } from "../../types/inputs/artificialPotato/createMany";

builder.mutationField("artificialPotatoCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [ArtificialPotatoCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.artificialPotato.createMany({ data: args.data });
      return count;
    },
  }),
);
