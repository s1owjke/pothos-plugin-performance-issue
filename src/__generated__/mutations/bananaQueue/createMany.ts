import { builder } from "src/builder";

import { BananaQueueCreateMany } from "../../types/inputs/bananaQueue/createMany";

builder.mutationField("bananaQueueCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [BananaQueueCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.bananaQueue.createMany({ data: args.data });
      return count;
    },
  }),
);
