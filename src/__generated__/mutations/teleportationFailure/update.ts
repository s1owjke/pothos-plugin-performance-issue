import { builder } from "src/builder";

import { TeleportationFailureUpdate } from "../../types/inputs/teleportationFailure/update";
import { TeleportationFailureWhereUnique } from "../../types/inputs/teleportationFailure/whereUnique";
import { TeleportationFailure } from "../../types/objects/teleportationFailure";

builder.mutationField("teleportationFailureUpdate", (t) =>
  t.field({
    type: TeleportationFailure,
    nullable: false,
    args: {
      where: t.arg({ type: TeleportationFailureWhereUnique, required: true }),
      data: t.arg({ type: TeleportationFailureUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.teleportationFailure.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
