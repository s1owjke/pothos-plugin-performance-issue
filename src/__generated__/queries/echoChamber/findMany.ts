import { builder } from "src/builder";

import { EchoChamberOrderBy } from "../../types/inputs/echoChamber/orderBy";
import { EchoChamberWhere } from "../../types/inputs/echoChamber/where";
import { EchoChamber } from "../../types/objects/echoChamber";

builder.queryField("echoChamberList", (t) =>
  t.prismaField({
    type: [EchoChamber],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: EchoChamberWhere }),
      orderBy: t.arg({ type: [EchoChamberOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.echoChamber.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
