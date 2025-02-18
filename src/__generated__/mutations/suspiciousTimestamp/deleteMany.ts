import { builder } from "src/builder";

import { SuspiciousTimestampWhere } from "../../types/inputs/suspiciousTimestamp/where";

builder.mutationField("suspiciousTimestampDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SuspiciousTimestampWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.suspiciousTimestamp.deleteMany({ where: args.where });
      return count;
    },
  }),
);
