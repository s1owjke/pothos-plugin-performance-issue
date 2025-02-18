import { builder } from "src/builder";

import { TeleportationFailureUpdate } from "../../types/inputs/teleportationFailure/update";
import { TeleportationFailureWhereUnique } from "../../types/inputs/teleportationFailure/whereUnique";
import { TeleportationFailure } from "../../types/objects/teleportationFailure";

builder.mutationField("teleportationFailureUpdateBatch", (t) =>
  t.field({
    type: [TeleportationFailure],
    nullable: false,
    args: {
      where: t.arg({ type: [TeleportationFailureWhereUnique], required: true }),
      data: t.arg({ type: [TeleportationFailureUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.teleportationFailure.update({ where, data });
        }),
      );
    },
  }),
);
