import { builder } from "src/builder";

import { ThoughtCacheUpdate } from "../../types/inputs/thoughtCache/update";
import { ThoughtCacheWhereUnique } from "../../types/inputs/thoughtCache/whereUnique";
import { ThoughtCache } from "../../types/objects/thoughtCache";

builder.mutationField("thoughtCacheUpdate", (t) =>
  t.field({
    type: ThoughtCache,
    nullable: false,
    args: {
      where: t.arg({ type: ThoughtCacheWhereUnique, required: true }),
      data: t.arg({ type: ThoughtCacheUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.thoughtCache.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
