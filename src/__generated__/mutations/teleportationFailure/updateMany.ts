import { builder } from "src/builder";

import { TeleportationFailureUpdateMany } from "../../types/inputs/teleportationFailure/updateMany";
import { TeleportationFailureWhere } from "../../types/inputs/teleportationFailure/where";

builder.mutationField("teleportationFailureUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: TeleportationFailureWhere, required: true }),
      data: t.arg({ type: TeleportationFailureUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.teleportationFailure.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
