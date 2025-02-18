import { builder } from "src/builder";

import { TeleportationFailureWhere } from "../../types/inputs/teleportationFailure/where";

builder.queryField("teleportationFailureCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: TeleportationFailureWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.teleportationFailure.count({ where: args.where || undefined });
    },
  }),
);
