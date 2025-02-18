import { builder } from "src/builder";

import { SuspiciousTimestampUpdate } from "../../types/inputs/suspiciousTimestamp/update";
import { SuspiciousTimestampWhereUnique } from "../../types/inputs/suspiciousTimestamp/whereUnique";
import { SuspiciousTimestamp } from "../../types/objects/suspiciousTimestamp";

builder.mutationField("suspiciousTimestampUpdate", (t) =>
  t.field({
    type: SuspiciousTimestamp,
    nullable: false,
    args: {
      where: t.arg({ type: SuspiciousTimestampWhereUnique, required: true }),
      data: t.arg({ type: SuspiciousTimestampUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.suspiciousTimestamp.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
