import { builder } from "src/builder";

import { CosmicDebriCreate } from "../../types/inputs/cosmicDebri/create";
import { CosmicDebri } from "../../types/objects/cosmicDebri";

builder.mutationField("cosmicDebriCreate", (t) =>
  t.field({
    type: CosmicDebri,
    nullable: false,
    args: {
      data: t.arg({ type: CosmicDebriCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.cosmicDebris.create({ data: args.data });
    },
  }),
);
