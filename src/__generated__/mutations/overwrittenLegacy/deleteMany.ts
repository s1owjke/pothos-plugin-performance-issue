import { builder } from "src/builder";

import { OverwrittenLegacyWhere } from "../../types/inputs/overwrittenLegacy/where";

builder.mutationField("overwrittenLegacyDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: OverwrittenLegacyWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.overwrittenLegacy.deleteMany({ where: args.where });
      return count;
    },
  }),
);
