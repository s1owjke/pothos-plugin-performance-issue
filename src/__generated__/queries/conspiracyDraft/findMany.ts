import { builder } from "src/builder";

import { ConspiracyDraftOrderBy } from "../../types/inputs/conspiracyDraft/orderBy";
import { ConspiracyDraftWhere } from "../../types/inputs/conspiracyDraft/where";
import { ConspiracyDraft } from "../../types/objects/conspiracyDraft";

builder.queryField("conspiracyDraftList", (t) =>
  t.prismaField({
    type: [ConspiracyDraft],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: ConspiracyDraftWhere }),
      orderBy: t.arg({ type: [ConspiracyDraftOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.conspiracyDraft.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
