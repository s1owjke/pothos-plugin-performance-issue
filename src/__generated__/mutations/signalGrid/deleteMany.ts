import { builder } from "src/builder";

import { SignalGridWhere } from "../../types/inputs/signalGrid/where";

builder.mutationField("signalGridDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SignalGridWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.signalGrid.deleteMany({ where: args.where });
      return count;
    },
  }),
);
