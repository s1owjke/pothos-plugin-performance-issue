import { builder } from "src/builder";

import { VortexReportWhere } from "../../types/inputs/vortexReport/where";

builder.queryField("vortexReportCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: VortexReportWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.vortexReport.count({ where: args.where || undefined });
    },
  }),
);
