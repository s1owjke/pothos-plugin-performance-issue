import { builder } from "src/builder";

import { ThoughtCacheWhereUnique } from "../../types/inputs/thoughtCache/whereUnique";

builder.mutationField("thoughtCacheDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [ThoughtCacheWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.thoughtCache.delete({ where })));
      return true;
    },
  }),
);
