import { builder } from "src/builder";

import { SymphonyChartUpdateMany } from "../../types/inputs/symphonyChart/updateMany";
import { SymphonyChartWhere } from "../../types/inputs/symphonyChart/where";

builder.mutationField("symphonyChartUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SymphonyChartWhere, required: true }),
      data: t.arg({ type: SymphonyChartUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.symphonyChart.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
