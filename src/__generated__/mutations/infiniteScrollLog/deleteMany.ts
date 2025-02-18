import { builder } from "src/builder";

import { InfiniteScrollLogWhere } from "../../types/inputs/infiniteScrollLog/where";

builder.mutationField("infiniteScrollLogDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: InfiniteScrollLogWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.infiniteScrollLog.deleteMany({ where: args.where });
      return count;
    },
  }),
);
