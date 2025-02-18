import { builder } from "src/builder";

import { PendingDisasterWhereUnique } from "../../types/inputs/pendingDisaster/whereUnique";
import { PendingDisaster } from "../../types/objects/pendingDisaster";

builder.queryField("pendingDisaster", (t) =>
  t.prismaField({
    type: PendingDisaster,
    nullable: true,
    args: {
      where: t.arg({ type: PendingDisasterWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.pendingDisaster.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
