import { builder } from "src/builder";

import { CosmicDebriCreate } from "../../types/inputs/cosmicDebri/create";
import { CosmicDebri } from "../../types/objects/cosmicDebri";

builder.mutationField("cosmicDebriCreateBatch", (t) =>
  t.field({
    type: [CosmicDebri],
    nullable: false,
    args: {
      data: t.arg({ type: [CosmicDebriCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.cosmicDebris.create({ data })));
    },
  }),
);
