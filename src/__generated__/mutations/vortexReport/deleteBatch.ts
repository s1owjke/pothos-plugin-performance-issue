import { builder } from "src/builder";

import { VortexReportWhereUnique } from "../../types/inputs/vortexReport/whereUnique";

builder.mutationField("vortexReportDeleteBatch", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: [VortexReportWhereUnique], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.$transaction(args.where.map((where) => dbRls.vortexReport.delete({ where })));
      return true;
    },
  }),
);
