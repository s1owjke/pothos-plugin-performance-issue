import { builder } from "src/builder";

import { ThoughtCacheCreateMany } from "../../types/inputs/thoughtCache/createMany";

builder.mutationField("thoughtCacheCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [ThoughtCacheCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.thoughtCache.createMany({ data: args.data });
      return count;
    },
  }),
);
