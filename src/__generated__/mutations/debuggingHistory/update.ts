import { builder } from "src/builder";

import { DebuggingHistoryUpdate } from "../../types/inputs/debuggingHistory/update";
import { DebuggingHistoryWhereUnique } from "../../types/inputs/debuggingHistory/whereUnique";
import { DebuggingHistory } from "../../types/objects/debuggingHistory";

builder.mutationField("debuggingHistoryUpdate", (t) =>
  t.field({
    type: DebuggingHistory,
    nullable: false,
    args: {
      where: t.arg({ type: DebuggingHistoryWhereUnique, required: true }),
      data: t.arg({ type: DebuggingHistoryUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.debuggingHistory.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
