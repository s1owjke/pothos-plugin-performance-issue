import { builder } from "src/builder";

import { SymphonyChartCreateMany } from "../../types/inputs/symphonyChart/createMany";

builder.mutationField("symphonyChartCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [SymphonyChartCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.symphonyChart.createMany({ data: args.data });
      return count;
    },
  }),
);
