import { builder } from "src/builder";

import { GravityOverrideWhere } from "../../types/inputs/gravityOverride/where";

builder.queryField("gravityOverrideCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: GravityOverrideWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.gravityOverride.count({ where: args.where || undefined });
    },
  }),
);
