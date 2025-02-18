import { builder } from "src/builder";

import { EndlessLoopWhere } from "../../types/inputs/endlessLoop/where";

builder.queryField("endlessLoopCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: EndlessLoopWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.endlessLoop.count({ where: args.where || undefined });
    },
  }),
);
