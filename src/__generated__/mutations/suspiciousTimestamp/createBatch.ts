import { builder } from "src/builder";

import { SuspiciousTimestampCreate } from "../../types/inputs/suspiciousTimestamp/create";
import { SuspiciousTimestamp } from "../../types/objects/suspiciousTimestamp";

builder.mutationField("suspiciousTimestampCreateBatch", (t) =>
  t.field({
    type: [SuspiciousTimestamp],
    nullable: false,
    args: {
      data: t.arg({ type: [SuspiciousTimestampCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.suspiciousTimestamp.create({ data })));
    },
  }),
);
