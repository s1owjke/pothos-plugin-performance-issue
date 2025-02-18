import { builder } from "src/builder";

import { ArtificialPotatoWhereUnique } from "../../types/inputs/artificialPotato/whereUnique";

builder.mutationField("artificialPotatoDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [ArtificialPotatoWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.artificialPotato.delete({ where })));
      return true;
    },
  }),
);
