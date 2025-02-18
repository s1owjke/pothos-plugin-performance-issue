import { builder } from "src/builder";

import { SuspiciousTimestampCreateMany } from "../../types/inputs/suspiciousTimestamp/createMany";

builder.mutationField("suspiciousTimestampCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [SuspiciousTimestampCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.suspiciousTimestamp.createMany({ data: args.data });
      return count;
    },
  }),
);
