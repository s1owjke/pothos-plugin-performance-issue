import { builder } from "src/builder";

import { ArtificialPotatoCreate } from "../../types/inputs/artificialPotato/create";
import { ArtificialPotato } from "../../types/objects/artificialPotato";

builder.mutationField("artificialPotatoCreateBatch", (t) =>
  t.field({
    type: [ArtificialPotato],
    nullable: false,
    args: {
      data: t.arg({ type: [ArtificialPotatoCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.artificialPotato.create({ data })));
    },
  }),
);
