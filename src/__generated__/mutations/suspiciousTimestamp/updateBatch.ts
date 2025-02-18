import { builder } from "src/builder";

import { SuspiciousTimestampUpdate } from "../../types/inputs/suspiciousTimestamp/update";
import { SuspiciousTimestampWhereUnique } from "../../types/inputs/suspiciousTimestamp/whereUnique";
import { SuspiciousTimestamp } from "../../types/objects/suspiciousTimestamp";

builder.mutationField("suspiciousTimestampUpdateBatch", (t) =>
  t.field({
    type: [SuspiciousTimestamp],
    nullable: false,
    args: {
      where: t.arg({ type: [SuspiciousTimestampWhereUnique], required: true }),
      data: t.arg({ type: [SuspiciousTimestampUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.suspiciousTimestamp.update({ where, data });
        }),
      );
    },
  }),
);
