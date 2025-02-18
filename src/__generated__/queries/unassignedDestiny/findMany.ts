import { builder } from "src/builder";

import { UnassignedDestinyOrderBy } from "../../types/inputs/unassignedDestiny/orderBy";
import { UnassignedDestinyWhere } from "../../types/inputs/unassignedDestiny/where";
import { UnassignedDestiny } from "../../types/objects/unassignedDestiny";

builder.queryField("unassignedDestinyList", (t) =>
  t.prismaField({
    type: [UnassignedDestiny],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: UnassignedDestinyWhere }),
      orderBy: t.arg({ type: [UnassignedDestinyOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.unassignedDestiny.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
