import { builder } from "src/builder";

import { TeleportationFailureWhere } from "../../types/inputs/teleportationFailure/where";

builder.mutationField("teleportationFailureDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: TeleportationFailureWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.teleportationFailure.deleteMany({ where: args.where });
      return count;
    },
  }),
);
