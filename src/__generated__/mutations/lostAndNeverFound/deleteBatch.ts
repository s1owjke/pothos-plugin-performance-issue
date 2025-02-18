import { builder } from "src/builder";

import { LostAndNeverFoundWhereUnique } from "../../types/inputs/lostAndNeverFound/whereUnique";

builder.mutationField("lostAndNeverFoundDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [LostAndNeverFoundWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.lostAndNeverFound.delete({ where })));
      return true;
    },
  }),
);
