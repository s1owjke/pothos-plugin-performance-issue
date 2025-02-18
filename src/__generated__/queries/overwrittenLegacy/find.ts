import { builder } from "src/builder";

import { OverwrittenLegacyWhereUnique } from "../../types/inputs/overwrittenLegacy/whereUnique";
import { OverwrittenLegacy } from "../../types/objects/overwrittenLegacy";

builder.queryField("overwrittenLegacy", (t) =>
  t.prismaField({
    type: OverwrittenLegacy,
    nullable: true,
    args: {
      where: t.arg({ type: OverwrittenLegacyWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.overwrittenLegacy.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
