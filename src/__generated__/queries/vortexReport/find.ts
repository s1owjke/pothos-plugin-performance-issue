import { builder } from "src/builder";

import { VortexReportWhereUnique } from "../../types/inputs/vortexReport/whereUnique";
import { VortexReport } from "../../types/objects/vortexReport";

builder.queryField("vortexReport", (t) =>
  t.prismaField({
    type: VortexReport,
    nullable: true,
    args: {
      where: t.arg({ type: VortexReportWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.vortexReport.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
