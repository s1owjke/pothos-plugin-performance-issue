import { builder } from "src/builder";

import { VortexReportCreate } from "../../types/inputs/vortexReport/create";
import { VortexReport } from "../../types/objects/vortexReport";

builder.mutationField("vortexReportCreateBatch", (t) =>
  t.field({
    type: [VortexReport],
    nullable: false,
    args: {
      data: t.arg({ type: [VortexReportCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.vortexReport.create({ data })));
    },
  }),
);
