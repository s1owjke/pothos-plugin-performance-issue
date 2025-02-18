import { builder } from "src/builder";

import { OverwrittenLegacyWhere } from "../../types/inputs/overwrittenLegacy/where";

builder.queryField("overwrittenLegacyCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: OverwrittenLegacyWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.overwrittenLegacy.count({ where: args.where || undefined });
    },
  }),
);
