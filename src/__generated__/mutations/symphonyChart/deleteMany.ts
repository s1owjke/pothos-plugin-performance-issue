import { builder } from "src/builder";

import { SymphonyChartWhere } from "../../types/inputs/symphonyChart/where";

builder.mutationField("symphonyChartDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SymphonyChartWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.symphonyChart.deleteMany({ where: args.where });
      return count;
    },
  }),
);
