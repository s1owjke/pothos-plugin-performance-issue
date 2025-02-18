import { builder } from "src/builder";

import { SingularityReportUpdate } from "../../types/inputs/singularityReport/update";
import { SingularityReportWhereUnique } from "../../types/inputs/singularityReport/whereUnique";
import { SingularityReport } from "../../types/objects/singularityReport";

builder.mutationField("singularityReportUpdateBatch", (t) =>
  t.field({
    type: [SingularityReport],
    nullable: false,
    args: {
      where: t.arg({ type: [SingularityReportWhereUnique], required: true }),
      data: t.arg({ type: [SingularityReportUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.singularityReport.update({ where, data });
        }),
      );
    },
  }),
);
