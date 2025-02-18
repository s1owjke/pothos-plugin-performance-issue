import { builder } from "src/builder";

import { PocketUniverseUpdate } from "../../types/inputs/pocketUniverse/update";
import { PocketUniverseWhereUnique } from "../../types/inputs/pocketUniverse/whereUnique";
import { PocketUniverse } from "../../types/objects/pocketUniverse";

builder.mutationField("pocketUniverseUpdate", (t) =>
  t.field({
    type: PocketUniverse,
    nullable: false,
    args: {
      where: t.arg({ type: PocketUniverseWhereUnique, required: true }),
      data: t.arg({ type: PocketUniverseUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.pocketUniverse.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
