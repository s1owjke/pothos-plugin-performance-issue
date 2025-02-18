import { builder } from "src/builder";

import { InfiniteScrollLogWhere } from "../../types/inputs/infiniteScrollLog/where";

builder.queryField("infiniteScrollLogCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: InfiniteScrollLogWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.infiniteScrollLog.count({ where: args.where || undefined });
    },
  }),
);
