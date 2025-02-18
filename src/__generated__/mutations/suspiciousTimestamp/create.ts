import { builder } from "src/builder";

import { SuspiciousTimestampCreate } from "../../types/inputs/suspiciousTimestamp/create";
import { SuspiciousTimestamp } from "../../types/objects/suspiciousTimestamp";

builder.mutationField("suspiciousTimestampCreate", (t) =>
  t.field({
    type: SuspiciousTimestamp,
    nullable: false,
    args: {
      data: t.arg({ type: SuspiciousTimestampCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.suspiciousTimestamp.create({ data: args.data });
    },
  }),
);
