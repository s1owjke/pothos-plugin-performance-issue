import { builder } from "src/builder";

import { ArtificialPotatoUpdate } from "../../types/inputs/artificialPotato/update";
import { ArtificialPotatoWhereUnique } from "../../types/inputs/artificialPotato/whereUnique";
import { ArtificialPotato } from "../../types/objects/artificialPotato";

builder.mutationField("artificialPotatoUpdate", (t) =>
  t.field({
    type: ArtificialPotato,
    nullable: false,
    args: {
      where: t.arg({ type: ArtificialPotatoWhereUnique, required: true }),
      data: t.arg({ type: ArtificialPotatoUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.artificialPotato.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
