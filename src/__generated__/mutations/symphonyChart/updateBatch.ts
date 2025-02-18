import { builder } from "src/builder";

import { SymphonyChartUpdate } from "../../types/inputs/symphonyChart/update";
import { SymphonyChartWhereUnique } from "../../types/inputs/symphonyChart/whereUnique";
import { SymphonyChart } from "../../types/objects/symphonyChart";

builder.mutationField("symphonyChartUpdateBatch", (t) =>
  t.field({
    type: [SymphonyChart],
    nullable: false,
    args: {
      where: t.arg({ type: [SymphonyChartWhereUnique], required: true }),
      data: t.arg({ type: [SymphonyChartUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.symphonyChart.update({ where, data });
        }),
      );
    },
  }),
);
