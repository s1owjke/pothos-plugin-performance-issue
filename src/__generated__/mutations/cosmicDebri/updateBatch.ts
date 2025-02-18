import { builder } from "src/builder";

import { CosmicDebriUpdate } from "../../types/inputs/cosmicDebri/update";
import { CosmicDebriWhereUnique } from "../../types/inputs/cosmicDebri/whereUnique";
import { CosmicDebri } from "../../types/objects/cosmicDebri";

builder.mutationField("cosmicDebriUpdateBatch", (t) =>
  t.field({
    type: [CosmicDebri],
    nullable: false,
    args: {
      where: t.arg({ type: [CosmicDebriWhereUnique], required: true }),
      data: t.arg({ type: [CosmicDebriUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.cosmicDebris.update({ where, data });
        }),
      );
    },
  }),
);
