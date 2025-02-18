import { builder } from "src/builder";

import { SymphonyChartWhereUnique } from "../../types/inputs/symphonyChart/whereUnique";

builder.mutationField("symphonyChartDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [SymphonyChartWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.symphonyChart.delete({ where })));
      return true;
    },
  }),
);
