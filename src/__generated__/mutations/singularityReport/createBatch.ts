import { builder } from "src/builder";

import { SingularityReportCreate } from "../../types/inputs/singularityReport/create";
import { SingularityReport } from "../../types/objects/singularityReport";

builder.mutationField("singularityReportCreateBatch", (t) =>
  t.field({
    type: [SingularityReport],
    nullable: false,
    args: {
      data: t.arg({ type: [SingularityReportCreate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.$transaction(args.data.map((data) => dbRls.singularityReport.create({ data })));
    },
  }),
);
