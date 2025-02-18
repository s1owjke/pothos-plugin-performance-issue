import { builder } from "src/builder";

import { TeleportationFailureCreate } from "../../types/inputs/teleportationFailure/create";
import { TeleportationFailure } from "../../types/objects/teleportationFailure";

builder.mutationField("teleportationFailureCreate", (t) =>
  t.field({
    type: TeleportationFailure,
    nullable: false,
    args: {
      data: t.arg({ type: TeleportationFailureCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.teleportationFailure.create({ data: args.data });
    },
  }),
);
