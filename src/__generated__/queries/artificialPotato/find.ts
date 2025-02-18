import { builder } from "src/builder";

import { ArtificialPotatoWhereUnique } from "../../types/inputs/artificialPotato/whereUnique";
import { ArtificialPotato } from "../../types/objects/artificialPotato";

builder.queryField("artificialPotato", (t) =>
  t.prismaField({
    type: ArtificialPotato,
    nullable: true,
    args: {
      where: t.arg({ type: ArtificialPotatoWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.artificialPotato.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
