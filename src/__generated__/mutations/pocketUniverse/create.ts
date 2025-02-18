import { builder } from "src/builder";

import { PocketUniverseCreate } from "../../types/inputs/pocketUniverse/create";
import { PocketUniverse } from "../../types/objects/pocketUniverse";

builder.mutationField("pocketUniverseCreate", (t) =>
  t.field({
    type: PocketUniverse,
    nullable: false,
    args: {
      data: t.arg({ type: PocketUniverseCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.pocketUniverse.create({ data: args.data });
    },
  }),
);
