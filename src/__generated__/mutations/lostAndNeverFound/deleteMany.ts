import { builder } from "src/builder";

import { LostAndNeverFoundWhere } from "../../types/inputs/lostAndNeverFound/where";

builder.mutationField("lostAndNeverFoundDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: LostAndNeverFoundWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.lostAndNeverFound.deleteMany({ where: args.where });
      return count;
    },
  }),
);
