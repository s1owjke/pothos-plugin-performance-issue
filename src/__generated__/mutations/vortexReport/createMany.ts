import { builder } from "src/builder";

import { VortexReportCreateMany } from "../../types/inputs/vortexReport/createMany";

builder.mutationField("vortexReportCreateMany", (t) =>
  t.field({
    type: "Int",
    nullable: false,
    args: {
      data: t.arg({ type: [VortexReportCreateMany], required: true }),
    },
    resolve: async (root, args, { dbRls }) => {
      const { count } = await dbRls.vortexReport.createMany({ data: args.data });
      return count;
    },
  }),
);
