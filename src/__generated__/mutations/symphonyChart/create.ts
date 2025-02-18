import { builder } from "src/builder";

import { SymphonyChartCreate } from "../../types/inputs/symphonyChart/create";
import { SymphonyChart } from "../../types/objects/symphonyChart";

builder.mutationField("symphonyChartCreate", (t) =>
  t.field({
    type: SymphonyChart,
    nullable: false,
    args: {
      data: t.arg({ type: SymphonyChartCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.symphonyChart.create({ data: args.data });
    },
  }),
);
