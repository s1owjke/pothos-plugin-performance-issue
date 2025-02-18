import { builder } from "src/builder";

import { SuspiciousTimestampOrderBy } from "../../types/inputs/suspiciousTimestamp/orderBy";
import { SuspiciousTimestampWhere } from "../../types/inputs/suspiciousTimestamp/where";
import { SuspiciousTimestamp } from "../../types/objects/suspiciousTimestamp";

builder.queryField("suspiciousTimestampList", (t) =>
  t.prismaField({
    type: [SuspiciousTimestamp],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: SuspiciousTimestampWhere }),
      orderBy: t.arg({ type: [SuspiciousTimestampOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.suspiciousTimestamp.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
