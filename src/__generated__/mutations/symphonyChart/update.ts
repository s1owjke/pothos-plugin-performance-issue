import { builder } from "src/builder";

import { SymphonyChartUpdate } from "../../types/inputs/symphonyChart/update";
import { SymphonyChartWhereUnique } from "../../types/inputs/symphonyChart/whereUnique";
import { SymphonyChart } from "../../types/objects/symphonyChart";

builder.mutationField("symphonyChartUpdate", (t) =>
  t.field({
    type: SymphonyChart,
    nullable: false,
    args: {
      where: t.arg({ type: SymphonyChartWhereUnique, required: true }),
      data: t.arg({ type: SymphonyChartUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.symphonyChart.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
