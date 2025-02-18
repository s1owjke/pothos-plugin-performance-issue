import { builder } from "src/builder";

import { InfiniteScrollLogCreateMany } from "../../types/inputs/infiniteScrollLog/createMany";

builder.mutationField("infiniteScrollLogCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [InfiniteScrollLogCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.infiniteScrollLog.createMany({ data: args.data });
      return count;
    },
  }),
);
