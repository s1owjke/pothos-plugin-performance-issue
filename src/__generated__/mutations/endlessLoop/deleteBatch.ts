import { builder } from "src/builder";

import { EndlessLoopWhereUnique } from "../../types/inputs/endlessLoop/whereUnique";

builder.mutationField("endlessLoopDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [EndlessLoopWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.endlessLoop.delete({ where })));
      return true;
    },
  }),
);
