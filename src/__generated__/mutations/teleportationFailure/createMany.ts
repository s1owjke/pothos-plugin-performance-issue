import { builder } from "src/builder";

import { TeleportationFailureCreateMany } from "../../types/inputs/teleportationFailure/createMany";

builder.mutationField("teleportationFailureCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [TeleportationFailureCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.teleportationFailure.createMany({ data: args.data });
      return count;
    },
  }),
);
