import { builder } from "src/builder";

import { SignalGridWhere } from "../../types/inputs/signalGrid/where";

builder.queryField("signalGridCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SignalGridWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.signalGrid.count({ where: args.where || undefined });
    },
  }),
);
