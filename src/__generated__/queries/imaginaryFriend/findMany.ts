import { builder } from "src/builder";

import { ImaginaryFriendOrderBy } from "../../types/inputs/imaginaryFriend/orderBy";
import { ImaginaryFriendWhere } from "../../types/inputs/imaginaryFriend/where";
import { ImaginaryFriend } from "../../types/objects/imaginaryFriend";

builder.queryField("imaginaryFriendList", (t) =>
  t.prismaField({
    type: [ImaginaryFriend],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: ImaginaryFriendWhere }),
      orderBy: t.arg({ type: [ImaginaryFriendOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.imaginaryFriend.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
