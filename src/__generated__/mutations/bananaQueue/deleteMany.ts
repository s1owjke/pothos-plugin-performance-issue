import { builder } from "src/builder";

import { BananaQueueWhere } from "../../types/inputs/bananaQueue/where";

builder.mutationField("bananaQueueDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: BananaQueueWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.bananaQueue.deleteMany({ where: args.where });
      return count;
    },
  }),
);
