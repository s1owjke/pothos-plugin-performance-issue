import { builder } from "src/builder";

import { BananaQueueWhereUnique } from "../../types/inputs/bananaQueue/whereUnique";

builder.mutationField("bananaQueueDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: BananaQueueWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.bananaQueue.delete({ where: args.where });
      return true;
    },
  }),
);
