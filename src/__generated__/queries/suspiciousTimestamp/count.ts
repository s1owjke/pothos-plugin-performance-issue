import { builder } from "src/builder";

import { SuspiciousTimestampWhere } from "../../types/inputs/suspiciousTimestamp/where";

builder.queryField("suspiciousTimestampCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SuspiciousTimestampWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.suspiciousTimestamp.count({ where: args.where || undefined });
    },
  }),
);
