import { builder } from "src/builder";

import { OverdueRevolutionWhere } from "../../types/inputs/overdueRevolution/where";

builder.queryField("overdueRevolutionCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: OverdueRevolutionWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.overdueRevolution.count({ where: args.where || undefined });
    },
  }),
);
