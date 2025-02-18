import { builder } from "src/builder";

import { PendingDisasterWhereUnique } from "../../types/inputs/pendingDisaster/whereUnique";

builder.mutationField("pendingDisasterDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: PendingDisasterWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.pendingDisaster.delete({ where: args.where });
      return true;
    },
  }),
);
