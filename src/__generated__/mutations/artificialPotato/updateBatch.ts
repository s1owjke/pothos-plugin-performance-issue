import { builder } from "src/builder";

import { ArtificialPotatoUpdate } from "../../types/inputs/artificialPotato/update";
import { ArtificialPotatoWhereUnique } from "../../types/inputs/artificialPotato/whereUnique";
import { ArtificialPotato } from "../../types/objects/artificialPotato";

builder.mutationField("artificialPotatoUpdateBatch", (t) =>
  t.field({
    type: [ArtificialPotato],
    nullable: false,
    args: {
      where: t.arg({ type: [ArtificialPotatoWhereUnique], required: true }),
      data: t.arg({ type: [ArtificialPotatoUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.artificialPotato.update({ where, data });
        }),
      );
    },
  }),
);
