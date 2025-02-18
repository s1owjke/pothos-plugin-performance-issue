import { builder } from "src/builder";

import { DebuggingHistoryCreate } from "../../types/inputs/debuggingHistory/create";
import { DebuggingHistory } from "../../types/objects/debuggingHistory";

builder.mutationField("debuggingHistoryCreateBatch", (t) =>
  t.field({
    type: [DebuggingHistory],
    nullable: false,
    args: {
      data: t.arg({ type: [DebuggingHistoryCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.debuggingHistory.create({ data })));
    },
  }),
);
