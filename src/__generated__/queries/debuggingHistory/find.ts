import { builder } from "src/builder";

import { DebuggingHistoryWhereUnique } from "../../types/inputs/debuggingHistory/whereUnique";
import { DebuggingHistory } from "../../types/objects/debuggingHistory";

builder.queryField("debuggingHistory", (t) =>
  t.prismaField({
    type: DebuggingHistory,
    nullable: true,
    args: {
      where: t.arg({ type: DebuggingHistoryWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.debuggingHistory.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
