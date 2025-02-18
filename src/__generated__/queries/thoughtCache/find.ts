import { builder } from "src/builder";

import { ThoughtCacheWhereUnique } from "../../types/inputs/thoughtCache/whereUnique";
import { ThoughtCache } from "../../types/objects/thoughtCache";

builder.queryField("thoughtCache", (t) =>
  t.prismaField({
    type: ThoughtCache,
    nullable: true,
    args: {
      where: t.arg({ type: ThoughtCacheWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.thoughtCache.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
