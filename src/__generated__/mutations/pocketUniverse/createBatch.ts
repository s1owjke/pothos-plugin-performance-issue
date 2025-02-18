import { builder } from "src/builder";

import { PocketUniverseCreate } from "../../types/inputs/pocketUniverse/create";
import { PocketUniverse } from "../../types/objects/pocketUniverse";

builder.mutationField("pocketUniverseCreateBatch", (t) =>
  t.field({
    type: [PocketUniverse],
    nullable: false,
    args: {
      data: t.arg({ type: [PocketUniverseCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.pocketUniverse.create({ data })));
    },
  }),
);
