import { builder } from "src/builder";

import { VortexReportWhere } from "../../types/inputs/vortexReport/where";

builder.mutationField("vortexReportDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: VortexReportWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.vortexReport.deleteMany({ where: args.where });
      return count;
    },
  }),
);
