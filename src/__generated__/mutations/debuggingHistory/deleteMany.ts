import { builder } from "src/builder";

import { DebuggingHistoryWhere } from "../../types/inputs/debuggingHistory/where";

builder.mutationField("debuggingHistoryDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: DebuggingHistoryWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.debuggingHistory.deleteMany({ where: args.where });
      return count;
    },
  }),
);
