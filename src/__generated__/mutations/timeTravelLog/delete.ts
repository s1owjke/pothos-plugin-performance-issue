import { builder } from "src/builder";

import { TimeTravelLogWhereUnique } from "../../types/inputs/timeTravelLog/whereUnique";

builder.mutationField("timeTravelLogDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: TimeTravelLogWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.timeTravelLog.delete({ where: args.where });
      return true;
    },
  }),
);
