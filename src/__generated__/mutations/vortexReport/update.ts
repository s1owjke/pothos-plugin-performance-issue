import { builder } from "src/builder";

import { VortexReportUpdate } from "../../types/inputs/vortexReport/update";
import { VortexReportWhereUnique } from "../../types/inputs/vortexReport/whereUnique";
import { VortexReport } from "../../types/objects/vortexReport";

builder.mutationField("vortexReportUpdate", (t) =>
  t.field({
    type: VortexReport,
    nullable: false,
    args: {
      where: t.arg({ type: VortexReportWhereUnique, required: true }),
      data: t.arg({ type: VortexReportUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.vortexReport.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
