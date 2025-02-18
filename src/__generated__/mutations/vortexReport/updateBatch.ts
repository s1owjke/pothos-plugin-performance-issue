import { builder } from "src/builder";

import { VortexReportUpdate } from "../../types/inputs/vortexReport/update";
import { VortexReportWhereUnique } from "../../types/inputs/vortexReport/whereUnique";
import { VortexReport } from "../../types/objects/vortexReport";

builder.mutationField("vortexReportUpdateBatch", (t) =>
  t.field({
    type: [VortexReport],
    nullable: false,
    args: {
      where: t.arg({ type: [VortexReportWhereUnique], required: true }),
      data: t.arg({ type: [VortexReportUpdate], required: true }),
    },
    resolve: (root, args, { dbRls }) => {
      if (args.where.length !== args.data.length) {
        throw new Error("The length of the where and data arrays must be the same");
      }

      return dbRls.$transaction(
        args.where.map((where, index) => {
          const data = args.data[index];
          return dbRls.vortexReport.update({ where, data });
        }),
      );
    },
  }),
);
