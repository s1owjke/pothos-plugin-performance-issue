import { builder } from "src/builder";

import { ArtificialPotatoWhereUnique } from "../../types/inputs/artificialPotato/whereUnique";

builder.mutationField("artificialPotatoDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: ArtificialPotatoWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.artificialPotato.delete({ where: args.where });
      return true;
    },
  }),
);
