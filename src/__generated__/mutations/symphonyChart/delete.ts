import { builder } from "src/builder";

import { SymphonyChartWhereUnique } from "../../types/inputs/symphonyChart/whereUnique";

builder.mutationField("symphonyChartDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: SymphonyChartWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.symphonyChart.delete({ where: args.where });
      return true;
    },
  }),
);
