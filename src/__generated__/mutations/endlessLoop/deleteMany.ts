import { builder } from "src/builder";

import { EndlessLoopWhere } from "../../types/inputs/endlessLoop/where";

builder.mutationField("endlessLoopDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: EndlessLoopWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.endlessLoop.deleteMany({ where: args.where });
      return count;
    },
  }),
);
