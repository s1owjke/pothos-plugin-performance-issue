import { builder } from "src/builder";

import { TimeTravelLogWhereUnique } from "../../types/inputs/timeTravelLog/whereUnique";

builder.mutationField("timeTravelLogDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [TimeTravelLogWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.timeTravelLog.delete({ where })));
      return true;
    },
  }),
);
