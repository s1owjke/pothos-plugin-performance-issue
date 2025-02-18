import { builder } from "src/builder";

import { SymphonyChartCreate } from "../../types/inputs/symphonyChart/create";
import { SymphonyChart } from "../../types/objects/symphonyChart";

builder.mutationField("symphonyChartCreateBatch", (t) =>
  t.field({
    type: [SymphonyChart],
    nullable: false,
    args: {
      data: t.arg({ type: [SymphonyChartCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.symphonyChart.create({ data })));
    },
  }),
);
