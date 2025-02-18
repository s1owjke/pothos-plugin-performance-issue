import { builder } from "src/builder";

import { BananaQueueUpdate } from "../../types/inputs/bananaQueue/update";
import { BananaQueueWhereUnique } from "../../types/inputs/bananaQueue/whereUnique";
import { BananaQueue } from "../../types/objects/bananaQueue";

builder.mutationField("bananaQueueUpdateBatch", (t) =>
  t.field({
    type: [BananaQueue],
    nullable: false,
    args: {
      where: t.arg({ type: [BananaQueueWhereUnique], required: true }),
      data: t.arg({ type: [BananaQueueUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.bananaQueue.update({ where, data });
        }),
      );
    },
  }),
);
