import { builder } from "src/builder";

import { ThoughtCacheCreate } from "../../types/inputs/thoughtCache/create";
import { ThoughtCache } from "../../types/objects/thoughtCache";

builder.mutationField("thoughtCacheCreateBatch", (t) =>
  t.field({
    type: [ThoughtCache],
    nullable: false,
    args: {
      data: t.arg({ type: [ThoughtCacheCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.thoughtCache.create({ data })));
    },
  }),
);
