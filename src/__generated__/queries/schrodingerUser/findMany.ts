import { builder } from "src/builder";

import { SchrodingerUserOrderBy } from "../../types/inputs/schrodingerUser/orderBy";
import { SchrodingerUserWhere } from "../../types/inputs/schrodingerUser/where";
import { SchrodingerUser } from "../../types/objects/schrodingerUser";

builder.queryField("schrodingerUserList", (t) =>
  t.prismaField({
    type: [SchrodingerUser],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: SchrodingerUserWhere }),
      orderBy: t.arg({ type: [SchrodingerUserOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.schrodingerUser.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
