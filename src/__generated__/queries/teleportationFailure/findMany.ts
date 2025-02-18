import { builder } from "src/builder";

import { TeleportationFailureOrderBy } from "../../types/inputs/teleportationFailure/orderBy";
import { TeleportationFailureWhere } from "../../types/inputs/teleportationFailure/where";
import { TeleportationFailure } from "../../types/objects/teleportationFailure";

builder.queryField("teleportationFailureList", (t) =>
  t.prismaField({
    type: [TeleportationFailure],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: TeleportationFailureWhere }),
      orderBy: t.arg({ type: [TeleportationFailureOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.teleportationFailure.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
