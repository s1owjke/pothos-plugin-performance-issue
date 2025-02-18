import { builder } from "src/builder";

import { EchoChamberWhere } from "../../types/inputs/echoChamber/where";

builder.queryField("echoChamberCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: EchoChamberWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.echoChamber.count({ where: args.where || undefined });
    },
  }),
);
