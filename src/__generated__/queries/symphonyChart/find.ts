import { builder } from "src/builder";

import { SymphonyChartWhereUnique } from "../../types/inputs/symphonyChart/whereUnique";
import { SymphonyChart } from "../../types/objects/symphonyChart";

builder.queryField("symphonyChart", (t) =>
  t.prismaField({
    type: SymphonyChart,
    nullable: true,
    args: {
      where: t.arg({ type: SymphonyChartWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.symphonyChart.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
