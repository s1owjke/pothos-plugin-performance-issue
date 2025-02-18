import { builder } from "src/builder";

import { OverwrittenLegacyOrderBy } from "../../types/inputs/overwrittenLegacy/orderBy";
import { OverwrittenLegacyWhere } from "../../types/inputs/overwrittenLegacy/where";
import { OverwrittenLegacy } from "../../types/objects/overwrittenLegacy";

builder.queryField("overwrittenLegacyList", (t) =>
  t.prismaField({
    type: [OverwrittenLegacy],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: OverwrittenLegacyWhere }),
      orderBy: t.arg({ type: [OverwrittenLegacyOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.overwrittenLegacy.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
