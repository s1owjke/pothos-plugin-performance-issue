import { builder } from "src/builder";

import { InfiniteScrollLogCreate } from "../../types/inputs/infiniteScrollLog/create";
import { InfiniteScrollLog } from "../../types/objects/infiniteScrollLog";

builder.mutationField("infiniteScrollLogCreateBatch", (t) =>
  t.field({
    type: [InfiniteScrollLog],
    nullable: false,
    args: {
      data: t.arg({ type: [InfiniteScrollLogCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.infiniteScrollLog.create({ data })));
    },
  }),
);
