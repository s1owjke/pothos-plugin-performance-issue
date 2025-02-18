import { builder } from "src/builder";

import { UnassignedDestinyWhere } from "../../types/inputs/unassignedDestiny/where";

builder.mutationField("unassignedDestinyDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: UnassignedDestinyWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.unassignedDestiny.deleteMany({ where: args.where });
      return count;
    },
  }),
);
