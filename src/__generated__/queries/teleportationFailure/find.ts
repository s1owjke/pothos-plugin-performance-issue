import { builder } from "src/builder";

import { TeleportationFailureWhereUnique } from "../../types/inputs/teleportationFailure/whereUnique";
import { TeleportationFailure } from "../../types/objects/teleportationFailure";

builder.queryField("teleportationFailure", (t) =>
  t.prismaField({
    type: TeleportationFailure,
    nullable: true,
    args: {
      where: t.arg({ type: TeleportationFailureWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.teleportationFailure.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
