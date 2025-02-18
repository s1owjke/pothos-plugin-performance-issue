import { builder } from "src/builder";

import { ThoughtCacheWhereUnique } from "../../types/inputs/thoughtCache/whereUnique";

builder.mutationField("thoughtCacheDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: ThoughtCacheWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.thoughtCache.delete({ where: args.where });
      return true;
    },
  }),
);
