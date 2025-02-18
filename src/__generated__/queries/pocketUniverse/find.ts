import { builder } from "src/builder";

import { PocketUniverseWhereUnique } from "../../types/inputs/pocketUniverse/whereUnique";
import { PocketUniverse } from "../../types/objects/pocketUniverse";

builder.queryField("pocketUniverse", (t) =>
  t.prismaField({
    type: PocketUniverse,
    nullable: true,
    args: {
      where: t.arg({ type: PocketUniverseWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.pocketUniverse.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
