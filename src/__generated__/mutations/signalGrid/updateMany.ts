import { builder } from "src/builder";

import { SignalGridUpdateMany } from "../../types/inputs/signalGrid/updateMany";
import { SignalGridWhere } from "../../types/inputs/signalGrid/where";

builder.mutationField("signalGridUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SignalGridWhere, required: true }),
      data: t.arg({ type: SignalGridUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.signalGrid.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
