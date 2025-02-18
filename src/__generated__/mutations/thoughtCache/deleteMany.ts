import { builder } from "src/builder";

import { ThoughtCacheWhere } from "../../types/inputs/thoughtCache/where";

builder.mutationField("thoughtCacheDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: ThoughtCacheWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.thoughtCache.deleteMany({ where: args.where });
      return count;
    },
  }),
);
