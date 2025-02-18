import { builder } from "src/builder";

import { InfiniteScrollLogUpdate } from "../../types/inputs/infiniteScrollLog/update";
import { InfiniteScrollLogWhereUnique } from "../../types/inputs/infiniteScrollLog/whereUnique";
import { InfiniteScrollLog } from "../../types/objects/infiniteScrollLog";

builder.mutationField("infiniteScrollLogUpdateBatch", (t) =>
  t.field({
    type: [InfiniteScrollLog],
    nullable: false,
    args: {
      where: t.arg({ type: [InfiniteScrollLogWhereUnique], required: true }),
      data: t.arg({ type: [InfiniteScrollLogUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.infiniteScrollLog.update({ where, data });
        }),
      );
    },
  }),
);
