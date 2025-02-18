import { builder } from "src/builder";

import { SymphonyChartWhere } from "../../types/inputs/symphonyChart/where";

builder.queryField("symphonyChartCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SymphonyChartWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.symphonyChart.count({ where: args.where || undefined });
    },
  }),
);
