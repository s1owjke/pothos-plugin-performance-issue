import { builder } from "src/builder";

import { PendingDisasterWhereUnique } from "../../types/inputs/pendingDisaster/whereUnique";

builder.mutationField("pendingDisasterDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [PendingDisasterWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.pendingDisaster.delete({ where })));
      return true;
    },
  }),
);
