import { builder } from "src/builder";

import { PendingDisasterCreateMany } from "../../types/inputs/pendingDisaster/createMany";

builder.mutationField("pendingDisasterCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [PendingDisasterCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.pendingDisaster.createMany({ data: args.data });
      return count;
    },
  }),
);
