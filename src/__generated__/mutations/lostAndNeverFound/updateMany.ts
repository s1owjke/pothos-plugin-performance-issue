import { builder } from "src/builder";

import { LostAndNeverFoundUpdateMany } from "../../types/inputs/lostAndNeverFound/updateMany";
import { LostAndNeverFoundWhere } from "../../types/inputs/lostAndNeverFound/where";

builder.mutationField("lostAndNeverFoundUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: LostAndNeverFoundWhere, required: true }),
      data: t.arg({ type: LostAndNeverFoundUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.lostAndNeverFound.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
