import { builder } from "src/builder";

import { ArtificialPotatoOrderBy } from "../../types/inputs/artificialPotato/orderBy";
import { ArtificialPotatoWhere } from "../../types/inputs/artificialPotato/where";
import { ArtificialPotato } from "../../types/objects/artificialPotato";

builder.queryField("artificialPotatoList", (t) =>
  t.prismaField({
    type: [ArtificialPotato],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: ArtificialPotatoWhere }),
      orderBy: t.arg({ type: [ArtificialPotatoOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.artificialPotato.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
