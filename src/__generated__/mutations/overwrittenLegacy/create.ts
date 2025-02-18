import { builder } from "src/builder";

import { OverwrittenLegacyCreate } from "../../types/inputs/overwrittenLegacy/create";
import { OverwrittenLegacy } from "../../types/objects/overwrittenLegacy";

builder.mutationField("overwrittenLegacyCreate", (t) =>
  t.field({
    type: OverwrittenLegacy,
    nullable: false,
    args: {
      data: t.arg({ type: OverwrittenLegacyCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.overwrittenLegacy.create({ data: args.data });
    },
  }),
);
