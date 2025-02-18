import { builder } from "src/builder";

import { BananaQueueWhereUnique } from "../../types/inputs/bananaQueue/whereUnique";

builder.mutationField("bananaQueueDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [BananaQueueWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.bananaQueue.delete({ where })));
      return true;
    },
  }),
);
