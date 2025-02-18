import { builder } from "src/builder";

import { SuspiciousTimestampWhereUnique } from "../../types/inputs/suspiciousTimestamp/whereUnique";
import { SuspiciousTimestamp } from "../../types/objects/suspiciousTimestamp";

builder.queryField("suspiciousTimestamp", (t) =>
  t.prismaField({
    type: SuspiciousTimestamp,
    nullable: true,
    args: {
      where: t.arg({ type: SuspiciousTimestampWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.suspiciousTimestamp.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
