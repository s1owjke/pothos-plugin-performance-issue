import { builder } from "src/builder";

import { ThoughtCacheCreate } from "../../types/inputs/thoughtCache/create";
import { ThoughtCache } from "../../types/objects/thoughtCache";

builder.mutationField("thoughtCacheCreate", (t) =>
  t.field({
    type: ThoughtCache,
    nullable: false,
    args: {
      data: t.arg({ type: ThoughtCacheCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.thoughtCache.create({ data: args.data });
    },
  }),
);
