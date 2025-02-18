import { builder } from "src/builder";

import { InfiniteScrollLogWhereUnique } from "../../types/inputs/infiniteScrollLog/whereUnique";
import { InfiniteScrollLog } from "../../types/objects/infiniteScrollLog";

builder.queryField("infiniteScrollLog", (t) =>
  t.prismaField({
    type: InfiniteScrollLog,
    nullable: true,
    args: {
      where: t.arg({ type: InfiniteScrollLogWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.infiniteScrollLog.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
