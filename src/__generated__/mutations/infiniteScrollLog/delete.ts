import { builder } from "src/builder";

import { InfiniteScrollLogWhereUnique } from "../../types/inputs/infiniteScrollLog/whereUnique";

builder.mutationField("infiniteScrollLogDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: InfiniteScrollLogWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.infiniteScrollLog.delete({ where: args.where });
      return true;
    },
  }),
);
