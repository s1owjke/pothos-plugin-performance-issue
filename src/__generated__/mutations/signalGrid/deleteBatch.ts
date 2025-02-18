import { builder } from "src/builder";

import { SignalGridWhereUnique } from "../../types/inputs/signalGrid/whereUnique";

builder.mutationField("signalGridDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [SignalGridWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.signalGrid.delete({ where })));
      return true;
    },
  }),
);
