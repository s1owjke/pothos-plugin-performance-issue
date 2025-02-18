import { builder } from "src/builder";

import { PendingDisasterUpdate } from "../../types/inputs/pendingDisaster/update";
import { PendingDisasterWhereUnique } from "../../types/inputs/pendingDisaster/whereUnique";
import { PendingDisaster } from "../../types/objects/pendingDisaster";

builder.mutationField("pendingDisasterUpdate", (t) =>
  t.field({
    type: PendingDisaster,
    nullable: false,
    args: {
      where: t.arg({ type: PendingDisasterWhereUnique, required: true }),
      data: t.arg({ type: PendingDisasterUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.pendingDisaster.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
