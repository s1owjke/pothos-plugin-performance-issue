import { builder } from "src/builder";

import { DebuggingHistoryUpdateMany } from "../../types/inputs/debuggingHistory/updateMany";
import { DebuggingHistoryWhere } from "../../types/inputs/debuggingHistory/where";

builder.mutationField("debuggingHistoryUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: DebuggingHistoryWhere, required: true }),
      data: t.arg({ type: DebuggingHistoryUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.debuggingHistory.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
