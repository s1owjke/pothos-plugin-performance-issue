import { builder } from "src/builder";

import { ThoughtCacheUpdate } from "../../types/inputs/thoughtCache/update";
import { ThoughtCacheWhereUnique } from "../../types/inputs/thoughtCache/whereUnique";
import { ThoughtCache } from "../../types/objects/thoughtCache";

builder.mutationField("thoughtCacheUpdateBatch", (t) =>
  t.field({
    type: [ThoughtCache],
    nullable: false,
    args: {
      where: t.arg({ type: [ThoughtCacheWhereUnique], required: true }),
      data: t.arg({ type: [ThoughtCacheUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.thoughtCache.update({ where, data });
        }),
      );
    },
  }),
);
