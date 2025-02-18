import { builder } from "src/builder";

import { EndlessLoopCreateMany } from "../../types/inputs/endlessLoop/createMany";

builder.mutationField("endlessLoopCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [EndlessLoopCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.endlessLoop.createMany({ data: args.data });
      return count;
    },
  }),
);
