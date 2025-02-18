import { builder } from "src/builder";

import { OverwrittenLegacyUpdate } from "../../types/inputs/overwrittenLegacy/update";
import { OverwrittenLegacyWhereUnique } from "../../types/inputs/overwrittenLegacy/whereUnique";
import { OverwrittenLegacy } from "../../types/objects/overwrittenLegacy";

builder.mutationField("overwrittenLegacyUpdate", (t) =>
  t.field({
    type: OverwrittenLegacy,
    nullable: false,
    args: {
      where: t.arg({ type: OverwrittenLegacyWhereUnique, required: true }),
      data: t.arg({ type: OverwrittenLegacyUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.overwrittenLegacy.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
