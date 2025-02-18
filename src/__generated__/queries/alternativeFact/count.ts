import { builder } from "src/builder";

import { AlternativeFactWhere } from "../../types/inputs/alternativeFact/where";

builder.queryField("alternativeFactCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: AlternativeFactWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.alternativeFact.count({ where: args.where || undefined });
    },
  }),
);
