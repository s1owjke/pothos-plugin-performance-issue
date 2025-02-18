import { builder } from "src/builder";

import { EndlessLoopWhereUnique } from "../../types/inputs/endlessLoop/whereUnique";

builder.mutationField("endlessLoopDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: EndlessLoopWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.endlessLoop.delete({ where: args.where });
      return true;
    },
  }),
);
