import { builder } from "src/builder";

import { UnfinishedSymphonyWhere } from "../../types/inputs/unfinishedSymphony/where";

builder.queryField("unfinishedSymphonyCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnfinishedSymphonyWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.unfinishedSymphony.count({ where: args.where || undefined });
    },
  }),
);
