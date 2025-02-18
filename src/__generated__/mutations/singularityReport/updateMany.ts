import { builder } from "src/builder";

import { SingularityReportUpdateMany } from "../../types/inputs/singularityReport/updateMany";
import { SingularityReportWhere } from "../../types/inputs/singularityReport/where";

builder.mutationField("singularityReportUpdateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      where: t.arg({ type: SingularityReportWhere, required: true }),
      data: t.arg({ type: SingularityReportUpdateMany, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.singularityReport.updateMany({
        where: args.where,
        data: args.data,
      });
      return count;
    },
  }),
);
