import { builder } from "src/builder";

import { EmotionalSupportTableOrderBy } from "../../types/inputs/emotionalSupportTable/orderBy";
import { EmotionalSupportTableWhere } from "../../types/inputs/emotionalSupportTable/where";
import { EmotionalSupportTable } from "../../types/objects/emotionalSupportTable";

builder.queryField("emotionalSupportTableList", (t) =>
  t.prismaField({
    type: [EmotionalSupportTable],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: EmotionalSupportTableWhere }),
      orderBy: t.arg({ type: [EmotionalSupportTableOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.emotionalSupportTable.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
