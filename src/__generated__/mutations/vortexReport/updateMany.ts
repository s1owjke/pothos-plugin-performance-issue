import { builder } from "src/builder";

import { VortexReportUpdateMany } from "../../types/inputs/vortexReport/updateMany";
import { VortexReportWhere } from "../../types/inputs/vortexReport/where";

builder.mutationField("vortexReportUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: VortexReportWhere, required: true }),
      data: t.arg({ type: VortexReportUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.vortexReport.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
