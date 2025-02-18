import { builder } from "src/builder";

import { DebuggingHistoryWhere } from "../../types/inputs/debuggingHistory/where";

builder.queryField("debuggingHistoryCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: DebuggingHistoryWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.debuggingHistory.count({ where: args.where || undefined });
    },
  }),
);
