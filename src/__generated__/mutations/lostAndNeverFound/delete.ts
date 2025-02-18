import { builder } from "src/builder";

import { LostAndNeverFoundWhereUnique } from "../../types/inputs/lostAndNeverFound/whereUnique";

builder.mutationField("lostAndNeverFoundDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: LostAndNeverFoundWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.lostAndNeverFound.delete({ where: args.where });
      return true;
    },
  }),
);
