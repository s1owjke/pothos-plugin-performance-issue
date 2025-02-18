import { builder } from "src/builder";

import { OverwrittenLegacyUpdateMany } from "../../types/inputs/overwrittenLegacy/updateMany";
import { OverwrittenLegacyWhere } from "../../types/inputs/overwrittenLegacy/where";

builder.mutationField("overwrittenLegacyUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: OverwrittenLegacyWhere, required: true }),
      data: t.arg({ type: OverwrittenLegacyUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.overwrittenLegacy.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
