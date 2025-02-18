import { builder } from "src/builder";

import { SignalGridUpdate } from "../../types/inputs/signalGrid/update";
import { SignalGridWhereUnique } from "../../types/inputs/signalGrid/whereUnique";
import { SignalGrid } from "../../types/objects/signalGrid";

builder.mutationField("signalGridUpdate", (t) =>
  t.field({
    type: SignalGrid,
    nullable: false,
    args: {
      where: t.arg({ type: SignalGridWhereUnique, required: true }),
      data: t.arg({ type: SignalGridUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.signalGrid.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
