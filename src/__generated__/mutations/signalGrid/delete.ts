import { builder } from "src/builder";

import { SignalGridWhereUnique } from "../../types/inputs/signalGrid/whereUnique";

builder.mutationField("signalGridDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: SignalGridWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.signalGrid.delete({ where: args.where });
      return true;
    },
  }),
);
