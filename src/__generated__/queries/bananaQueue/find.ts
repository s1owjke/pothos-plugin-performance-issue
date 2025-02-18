import { builder } from "src/builder";

import { BananaQueueWhereUnique } from "../../types/inputs/bananaQueue/whereUnique";
import { BananaQueue } from "../../types/objects/bananaQueue";

builder.queryField("bananaQueue", (t) =>
  t.prismaField({
    type: BananaQueue,
    nullable: true,
    args: {
      where: t.arg({ type: BananaQueueWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.bananaQueue.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
