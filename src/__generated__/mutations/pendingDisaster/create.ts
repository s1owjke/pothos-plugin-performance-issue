import { builder } from "src/builder";

import { PendingDisasterCreate } from "../../types/inputs/pendingDisaster/create";
import { PendingDisaster } from "../../types/objects/pendingDisaster";

builder.mutationField("pendingDisasterCreate", (t) =>
  t.field({
    type: PendingDisaster,
    nullable: false,
    args: {
      data: t.arg({ type: PendingDisasterCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.pendingDisaster.create({ data: args.data });
    },
  }),
);
