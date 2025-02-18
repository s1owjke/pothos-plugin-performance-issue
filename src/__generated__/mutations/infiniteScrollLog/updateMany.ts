import { builder } from "src/builder";

import { InfiniteScrollLogUpdateMany } from "../../types/inputs/infiniteScrollLog/updateMany";
import { InfiniteScrollLogWhere } from "../../types/inputs/infiniteScrollLog/where";

builder.mutationField("infiniteScrollLogUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: InfiniteScrollLogWhere, required: true }),
      data: t.arg({ type: InfiniteScrollLogUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.infiniteScrollLog.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
