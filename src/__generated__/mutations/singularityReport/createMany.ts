import { builder } from "src/builder";

import { SingularityReportCreateMany } from "../../types/inputs/singularityReport/createMany";

builder.mutationField("singularityReportCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [SingularityReportCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.singularityReport.createMany({ data: args.data });
      return count;
    },
  }),
);
