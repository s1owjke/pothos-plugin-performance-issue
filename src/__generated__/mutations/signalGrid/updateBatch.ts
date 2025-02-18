import { builder } from "src/builder";

import { SignalGridUpdate } from "../../types/inputs/signalGrid/update";
import { SignalGridWhereUnique } from "../../types/inputs/signalGrid/whereUnique";
import { SignalGrid } from "../../types/objects/signalGrid";

builder.mutationField("signalGridUpdateBatch", (t) =>
  t.field({
    type: [SignalGrid],
    nullable: false,
    args: {
      where: t.arg({ type: [SignalGridWhereUnique], required: true }),
      data: t.arg({ type: [SignalGridUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.signalGrid.update({ where, data });
        }),
      );
    },
  }),
);
