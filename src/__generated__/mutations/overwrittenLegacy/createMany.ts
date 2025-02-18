import { builder } from "src/builder";

import { OverwrittenLegacyCreateMany } from "../../types/inputs/overwrittenLegacy/createMany";

builder.mutationField("overwrittenLegacyCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [OverwrittenLegacyCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.overwrittenLegacy.createMany({ data: args.data });
      return count;
    },
  }),
);
