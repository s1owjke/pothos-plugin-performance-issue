import { builder } from "src/builder";

import { PendingDisasterWhere } from "../../types/inputs/pendingDisaster/where";

builder.mutationField("pendingDisasterDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: PendingDisasterWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.pendingDisaster.deleteMany({ where: args.where });
      return count;
    },
  }),
);
