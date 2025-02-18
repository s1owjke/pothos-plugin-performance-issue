import { builder } from "src/builder";

import { CosmicDebriUpdate } from "../../types/inputs/cosmicDebri/update";
import { CosmicDebriWhereUnique } from "../../types/inputs/cosmicDebri/whereUnique";
import { CosmicDebri } from "../../types/objects/cosmicDebri";

builder.mutationField("cosmicDebriUpdate", (t) =>
  t.field({
    type: CosmicDebri,
    nullable: false,
    args: {
      where: t.arg({ type: CosmicDebriWhereUnique, required: true }),
      data: t.arg({ type: CosmicDebriUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.cosmicDebris.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
