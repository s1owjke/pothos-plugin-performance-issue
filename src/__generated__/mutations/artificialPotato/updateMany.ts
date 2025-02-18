import { builder } from "src/builder";

import { ArtificialPotatoUpdateMany } from "../../types/inputs/artificialPotato/updateMany";
import { ArtificialPotatoWhere } from "../../types/inputs/artificialPotato/where";

builder.mutationField("artificialPotatoUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ArtificialPotatoWhere, required: true }),
      data: t.arg({ type: ArtificialPotatoUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.artificialPotato.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
