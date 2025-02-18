import { builder } from "src/builder";

import { InfiniteScrollLogUpdate } from "../../types/inputs/infiniteScrollLog/update";
import { InfiniteScrollLogWhereUnique } from "../../types/inputs/infiniteScrollLog/whereUnique";
import { InfiniteScrollLog } from "../../types/objects/infiniteScrollLog";

builder.mutationField("infiniteScrollLogUpdate", (t) =>
  t.field({
    type: InfiniteScrollLog,
    nullable: false,
    args: {
      where: t.arg({ type: InfiniteScrollLogWhereUnique, required: true }),
      data: t.arg({ type: InfiniteScrollLogUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.infiniteScrollLog.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
