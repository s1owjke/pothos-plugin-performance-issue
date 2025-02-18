import { builder } from "src/builder";

import { SingularityReportWhere } from "../../types/inputs/singularityReport/where";

builder.queryField("singularityReportCount", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SingularityReportWhere }),
    },
    resolve: (root, args, { dbRls }) => {
      return dbRls.singularityReport.count({ where: args.where || undefined });
    },
  }),
);
