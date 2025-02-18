import { builder } from "src/builder";

import { SpontaneousCombustionWhere } from "../../types/inputs/spontaneousCombustion/where";

builder.queryField("spontaneousCombustionCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SpontaneousCombustionWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.spontaneousCombustion.count({ where: args.where || undefined });
    },
  }),
);
