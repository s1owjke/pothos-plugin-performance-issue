import { builder } from "src/builder";

import { GloriousMistakeOrderBy } from "../../types/inputs/gloriousMistake/orderBy";
import { GloriousMistakeWhere } from "../../types/inputs/gloriousMistake/where";
import { GloriousMistake } from "../../types/objects/gloriousMistake";

builder.queryField("gloriousMistakeList", (t) =>
  t.prismaField({
    type: [GloriousMistake],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: GloriousMistakeWhere }),
      orderBy: t.arg({ type: [GloriousMistakeOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.gloriousMistake.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
