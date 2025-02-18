import { builder } from "src/builder";

import { PocketUniverseUpdate } from "../../types/inputs/pocketUniverse/update";
import { PocketUniverseWhereUnique } from "../../types/inputs/pocketUniverse/whereUnique";
import { PocketUniverse } from "../../types/objects/pocketUniverse";

builder.mutationField("pocketUniverseUpdateBatch", (t) =>
  t.field({
    type: [PocketUniverse],
    nullable: false,
    args: {
      where: t.arg({ type: [PocketUniverseWhereUnique], required: true }),
      data: t.arg({ type: [PocketUniverseUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.pocketUniverse.update({ where, data });
        }),
      );
    },
  }),
);
