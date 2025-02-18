import { builder } from "src/builder";

import { BananaQueueUpdate } from "../../types/inputs/bananaQueue/update";
import { BananaQueueWhereUnique } from "../../types/inputs/bananaQueue/whereUnique";
import { BananaQueue } from "../../types/objects/bananaQueue";

builder.mutationField("bananaQueueUpdate", (t) =>
  t.field({
    type: BananaQueue,
    nullable: false,
    args: {
      where: t.arg({ type: BananaQueueWhereUnique, required: true }),
      data: t.arg({ type: BananaQueueUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.bananaQueue.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
