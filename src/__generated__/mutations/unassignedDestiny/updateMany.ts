import { builder } from "src/builder";

import { UnassignedDestinyUpdateMany } from "../../types/inputs/unassignedDestiny/updateMany";
import { UnassignedDestinyWhere } from "../../types/inputs/unassignedDestiny/where";

builder.mutationField("unassignedDestinyUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnassignedDestinyWhere, required: true }),
      data: t.arg({ type: UnassignedDestinyUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unassignedDestiny.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
