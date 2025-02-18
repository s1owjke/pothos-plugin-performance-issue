import { builder } from "src/builder";

import { ArtificialPotatoWhere } from "../../types/inputs/artificialPotato/where";

builder.queryField("artificialPotatoCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ArtificialPotatoWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.artificialPotato.count({ where: args.where || undefined });
    },
  }),
);
