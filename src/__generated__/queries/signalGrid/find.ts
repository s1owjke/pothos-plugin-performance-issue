import { builder } from "src/builder";

import { SignalGridWhereUnique } from "../../types/inputs/signalGrid/whereUnique";
import { SignalGrid } from "../../types/objects/signalGrid";

builder.queryField("signalGrid", (t) =>
  t.prismaField({
    type: SignalGrid,
    nullable: true,
    args: {
      where: t.arg({ type: SignalGridWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.signalGrid.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
