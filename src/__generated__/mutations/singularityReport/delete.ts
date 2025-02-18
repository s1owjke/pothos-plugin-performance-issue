import { builder } from "src/builder";

import { SingularityReportWhereUnique } from "../../types/inputs/singularityReport/whereUnique";

builder.mutationField("singularityReportDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: SingularityReportWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.singularityReport.delete({ where: args.where });
      return true;
    },
  }),
);
