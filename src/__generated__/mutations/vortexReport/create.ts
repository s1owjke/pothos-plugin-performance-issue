import { builder } from "src/builder";

import { VortexReportCreate } from "../../types/inputs/vortexReport/create";
import { VortexReport } from "../../types/objects/vortexReport";

builder.mutationField("vortexReportCreate", (t) =>
  t.field({
    type: VortexReport,
    nullable: false,
    args: {
      data: t.arg({ type: VortexReportCreate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.vortexReport.create({ data: args.data });
    },
  }),
);
