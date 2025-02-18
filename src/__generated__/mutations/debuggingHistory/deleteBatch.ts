import { builder } from "src/builder";

import { DebuggingHistoryWhereUnique } from "../../types/inputs/debuggingHistory/whereUnique";

builder.mutationField("debuggingHistoryDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [DebuggingHistoryWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.debuggingHistory.delete({ where })));
      return true;
    },
  }),
);
