import { builder } from "src/builder";

import { UnassignedDestinyWhereUnique } from "../../types/inputs/unassignedDestiny/whereUnique";

builder.mutationField("unassignedDestinyDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: UnassignedDestinyWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.unassignedDestiny.delete({ where: args.where });
      return true;
    },
  }),
);
