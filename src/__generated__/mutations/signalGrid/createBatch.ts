import { builder } from "src/builder";

import { SignalGridCreate } from "../../types/inputs/signalGrid/create";
import { SignalGrid } from "../../types/objects/signalGrid";

builder.mutationField("signalGridCreateBatch", (t) =>
  t.field({
    type: [SignalGrid],
    nullable: false,
    args: {
      data: t.arg({ type: [SignalGridCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.signalGrid.create({ data })));
    },
  }),
);
