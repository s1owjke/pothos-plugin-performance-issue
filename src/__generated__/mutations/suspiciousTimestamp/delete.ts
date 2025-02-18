import { builder } from "src/builder";

import { SuspiciousTimestampWhereUnique } from "../../types/inputs/suspiciousTimestamp/whereUnique";

builder.mutationField("suspiciousTimestampDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: SuspiciousTimestampWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.suspiciousTimestamp.delete({ where: args.where });
      return true;
    },
  }),
);
