import { builder } from "src/builder";

import { ThoughtCacheWhere } from "../../types/inputs/thoughtCache/where";

builder.queryField("thoughtCacheCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ThoughtCacheWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.thoughtCache.count({ where: args.where || undefined });
    },
  }),
);
