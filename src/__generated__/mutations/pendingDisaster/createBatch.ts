import { builder } from "src/builder";

import { PendingDisasterCreate } from "../../types/inputs/pendingDisaster/create";
import { PendingDisaster } from "../../types/objects/pendingDisaster";

builder.mutationField("pendingDisasterCreateBatch", (t) =>
  t.field({
    type: [PendingDisaster],
    nullable: false,
    args: {
      data: t.arg({ type: [PendingDisasterCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.pendingDisaster.create({ data })));
    },
  }),
);
