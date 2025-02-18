import { builder } from "src/builder";

import { BananaQueueCreate } from "../../types/inputs/bananaQueue/create";
import { BananaQueue } from "../../types/objects/bananaQueue";

builder.mutationField("bananaQueueCreateBatch", (t) =>
  t.field({
    type: [BananaQueue],
    nullable: false,
    args: {
      data: t.arg({ type: [BananaQueueCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.bananaQueue.create({ data })));
    },
  }),
);
