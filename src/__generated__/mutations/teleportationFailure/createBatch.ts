import { builder } from "src/builder";

import { TeleportationFailureCreate } from "../../types/inputs/teleportationFailure/create";
import { TeleportationFailure } from "../../types/objects/teleportationFailure";

builder.mutationField("teleportationFailureCreateBatch", (t) =>
  t.field({
    type: [TeleportationFailure],
    nullable: false,
    args: {
      data: t.arg({ type: [TeleportationFailureCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.teleportationFailure.create({ data })));
    },
  }),
);
