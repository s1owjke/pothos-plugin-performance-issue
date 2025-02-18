import { builder } from "src/builder";

import { TeleportationFailureWhereUnique } from "../../types/inputs/teleportationFailure/whereUnique";

builder.mutationField("teleportationFailureDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [TeleportationFailureWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.teleportationFailure.delete({ where })));
      return true;
    },
  }),
);
