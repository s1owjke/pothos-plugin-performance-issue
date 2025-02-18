import { builder } from "src/builder";

import { SuspiciousTimestampWhereUnique } from "../../types/inputs/suspiciousTimestamp/whereUnique";

builder.mutationField("suspiciousTimestampDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [SuspiciousTimestampWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.suspiciousTimestamp.delete({ where })));
      return true;
    },
  }),
);
