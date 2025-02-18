import { builder } from "src/builder";

import { SingularityReportWhere } from "../../types/inputs/singularityReport/where";

builder.mutationField("singularityReportDeleteMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SingularityReportWhere, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.singularityReport.deleteMany({ where: args.where });
      return count;
    },
  }),
);
