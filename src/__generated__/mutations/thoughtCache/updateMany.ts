import { builder } from "src/builder";

import { ThoughtCacheUpdateMany } from "../../types/inputs/thoughtCache/updateMany";
import { ThoughtCacheWhere } from "../../types/inputs/thoughtCache/where";

builder.mutationField("thoughtCacheUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ThoughtCacheWhere, required: true }),
      data: t.arg({ type: ThoughtCacheUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.thoughtCache.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
