import { builder } from "src/builder";

import { BananaQueueUpdateMany } from "../../types/inputs/bananaQueue/updateMany";
import { BananaQueueWhere } from "../../types/inputs/bananaQueue/where";

builder.mutationField("bananaQueueUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: BananaQueueWhere, required: true }),
      data: t.arg({ type: BananaQueueUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.bananaQueue.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
