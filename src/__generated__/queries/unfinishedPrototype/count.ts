import { builder } from "src/builder";

import { UnfinishedPrototypeWhere } from "../../types/inputs/unfinishedPrototype/where";

builder.queryField("unfinishedPrototypeCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnfinishedPrototypeWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.unfinishedPrototype.count({ where: args.where || undefined });
    },
  }),
);
