import { builder } from "src/builder";

import { ArtificialPotatoWhere } from "../../types/inputs/artificialPotato/where";

builder.mutationField("artificialPotatoDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ArtificialPotatoWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.artificialPotato.deleteMany({ where: args.where });
      return count;
    },
  }),
);
