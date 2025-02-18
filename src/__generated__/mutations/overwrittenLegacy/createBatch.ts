import { builder } from "src/builder";

import { OverwrittenLegacyCreate } from "../../types/inputs/overwrittenLegacy/create";
import { OverwrittenLegacy } from "../../types/objects/overwrittenLegacy";

builder.mutationField("overwrittenLegacyCreateBatch", (t) =>
  t.field({
    type: [OverwrittenLegacy],
    nullable: false,
    args: {
      data: t.arg({ type: [OverwrittenLegacyCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.overwrittenLegacy.create({ data })));
    },
  }),
);
