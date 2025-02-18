import { builder } from "src/builder";

import { OverwrittenLegacyWhereUnique } from "../../types/inputs/overwrittenLegacy/whereUnique";

builder.mutationField("overwrittenLegacyDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [OverwrittenLegacyWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.overwrittenLegacy.delete({ where })));
      return true;
    },
  }),
);
