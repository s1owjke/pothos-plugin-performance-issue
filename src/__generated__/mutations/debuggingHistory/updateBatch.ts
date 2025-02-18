import { builder } from "src/builder";

import { DebuggingHistoryUpdate } from "../../types/inputs/debuggingHistory/update";
import { DebuggingHistoryWhereUnique } from "../../types/inputs/debuggingHistory/whereUnique";
import { DebuggingHistory } from "../../types/objects/debuggingHistory";

builder.mutationField("debuggingHistoryUpdateBatch", (t) =>
  t.field({
    type: [DebuggingHistory],
    nullable: false,
    args: {
      where: t.arg({ type: [DebuggingHistoryWhereUnique], required: true }),
      data: t.arg({ type: [DebuggingHistoryUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.debuggingHistory.update({ where, data });
        }),
      );
    },
  }),
);
