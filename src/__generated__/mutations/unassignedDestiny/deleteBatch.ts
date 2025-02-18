import { builder } from "src/builder";

import { UnassignedDestinyWhereUnique } from "../../types/inputs/unassignedDestiny/whereUnique";

builder.mutationField("unassignedDestinyDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [UnassignedDestinyWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.unassignedDestiny.delete({ where })));
      return true;
    },
  }),
);
