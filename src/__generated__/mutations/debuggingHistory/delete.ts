import { builder } from "src/builder";

import { DebuggingHistoryWhereUnique } from "../../types/inputs/debuggingHistory/whereUnique";

builder.mutationField("debuggingHistoryDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: DebuggingHistoryWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.debuggingHistory.delete({ where: args.where });
      return true;
    },
  }),
);
