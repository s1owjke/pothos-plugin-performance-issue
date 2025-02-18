import { builder } from "src/builder";

import { InfiniteScrollLogWhereUnique } from "../../types/inputs/infiniteScrollLog/whereUnique";

builder.mutationField("infiniteScrollLogDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [InfiniteScrollLogWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.infiniteScrollLog.delete({ where })));
      return true;
    },
  }),
);
