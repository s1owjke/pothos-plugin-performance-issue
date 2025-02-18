import { builder } from "src/builder";

import { SingularityReportUpdate } from "../../types/inputs/singularityReport/update";
import { SingularityReportWhereUnique } from "../../types/inputs/singularityReport/whereUnique";
import { SingularityReport } from "../../types/objects/singularityReport";

builder.mutationField("singularityReportUpdate", (t) =>
  t.field({
    type: SingularityReport,
    nullable: false,
    args: {
      where: t.arg({ type: SingularityReportWhereUnique, required: true }),
      data: t.arg({ type: SingularityReportUpdate, required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.singularityReport.update({
        where: args.where,
        data: args.data,
      });
    },
  }),
);
