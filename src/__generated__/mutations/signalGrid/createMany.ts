import { builder } from "src/builder";

import { SignalGridCreateMany } from "../../types/inputs/signalGrid/createMany";

builder.mutationField("signalGridCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [SignalGridCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.signalGrid.createMany({ data: args.data });
      return count;
    },
  }),
);
