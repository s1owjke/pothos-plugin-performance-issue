import { builder } from "src/builder";

import { DebuggingHistoryCreateMany } from "../../types/inputs/debuggingHistory/createMany";

builder.mutationField("debuggingHistoryCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [DebuggingHistoryCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.debuggingHistory.createMany({ data: args.data });
      return count;
    },
  }),
);
