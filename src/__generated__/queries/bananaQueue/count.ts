import { builder } from "src/builder";

import { BananaQueueWhere } from "../../types/inputs/bananaQueue/where";

builder.queryField("bananaQueueCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: BananaQueueWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.bananaQueue.count({ where: args.where || undefined });
    },
  }),
);
