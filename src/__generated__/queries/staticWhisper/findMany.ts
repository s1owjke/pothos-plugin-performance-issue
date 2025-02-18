import { builder } from "src/builder";

import { StaticWhisperOrderBy } from "../../types/inputs/staticWhisper/orderBy";
import { StaticWhisperWhere } from "../../types/inputs/staticWhisper/where";
import { StaticWhisper } from "../../types/objects/staticWhisper";

builder.queryField("staticWhisperList", (t) =>
  t.prismaField({
    type: [StaticWhisper],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: StaticWhisperWhere }),
      orderBy: t.arg({ type: [StaticWhisperOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.staticWhisper.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
