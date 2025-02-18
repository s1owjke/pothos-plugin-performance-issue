import { builder } from "src/builder";

import { UnderappreciatedCommentOrderBy } from "../../types/inputs/underappreciatedComment/orderBy";
import { UnderappreciatedCommentWhere } from "../../types/inputs/underappreciatedComment/where";
import { UnderappreciatedComment } from "../../types/objects/underappreciatedComment";

builder.queryField("underappreciatedCommentList", (t) =>
  t.prismaField({
    type: [UnderappreciatedComment],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: UnderappreciatedCommentWhere }),
      orderBy: t.arg({ type: [UnderappreciatedCommentOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.underappreciatedComment.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
