import { builder } from "src/builder";

import { SingularityReportWhereUnique } from "../../types/inputs/singularityReport/whereUnique";

builder.mutationField("singularityReportDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [SingularityReportWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.singularityReport.delete({ where })));
      return true;
    },
  }),
);
