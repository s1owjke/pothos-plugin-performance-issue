import { builder } from "src/builder";

import { SuspiciousTimestampUpdateMany } from "../../types/inputs/suspiciousTimestamp/updateMany";
import { SuspiciousTimestampWhere } from "../../types/inputs/suspiciousTimestamp/where";

builder.mutationField("suspiciousTimestampUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SuspiciousTimestampWhere, required: true }),
      data: t.arg({ type: SuspiciousTimestampUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.suspiciousTimestamp.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
