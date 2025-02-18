import { builder } from "src/builder";

import { SingularityReportWhereUnique } from "../../types/inputs/singularityReport/whereUnique";
import { SingularityReport } from "../../types/objects/singularityReport";

builder.queryField("singularityReport", (t) =>
  t.prismaField({
    type: SingularityReport,
    nullable: true,
    args: {
      where: t.arg({ type: SingularityReportWhereUnique, required: true }),
    },
    resolve: (query, root, args, { dbRls }) => {
      return dbRls.singularityReport.findUnique({
        ...query,
        where: args.where,
      });
    },
  }),
);
