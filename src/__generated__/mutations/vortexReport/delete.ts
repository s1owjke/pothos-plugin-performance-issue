import { builder } from "src/builder";

import { VortexReportWhereUnique } from "../../types/inputs/vortexReport/whereUnique";

builder.mutationField("vortexReportDelete", (t) =>
  t.field({
    type: "Boolean",
    nullable: false,
    args: {
      where: t.arg({ type: VortexReportWhereUnique, required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      await dbRls.vortexReport.delete({ where: args.where });
      return true;
    },
  }),
);
