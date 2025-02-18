import { builder } from "src/builder";

import { TeleportationFailureWhereUnique } from "../../types/inputs/teleportationFailure/whereUnique";

builder.mutationField("teleportationFailureDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: TeleportationFailureWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.teleportationFailure.delete({ where: args.where });
      return true;
    },
  }),
);
