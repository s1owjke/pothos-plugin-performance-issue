import { builder } from "src/builder";

import { PendingDisasterUpdateMany } from "../../types/inputs/pendingDisaster/updateMany";
import { PendingDisasterWhere } from "../../types/inputs/pendingDisaster/where";

builder.mutationField("pendingDisasterUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: PendingDisasterWhere, required: true }),
      data: t.arg({ type: PendingDisasterUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.pendingDisaster.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
