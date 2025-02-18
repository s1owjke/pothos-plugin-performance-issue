import { builder } from "src/builder";

import { OverwrittenLegacyWhereUnique } from "../../types/inputs/overwrittenLegacy/whereUnique";

builder.mutationField("overwrittenLegacyDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: OverwrittenLegacyWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.overwrittenLegacy.delete({ where: args.where });
      return true;
    },
  }),
);
