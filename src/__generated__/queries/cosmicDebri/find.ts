import { builder } from "src/builder";

import { CosmicDebriWhereUnique } from "../../types/inputs/cosmicDebri/whereUnique";
import { CosmicDebri } from "../../types/objects/cosmicDebri";

builder.queryField("cosmicDebri", (t) =>
  t.prismaField({
    type: CosmicDebri,
    nullable: true,
    args: {
      where: t.arg({ type: CosmicDebriWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.cosmicDebris.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
