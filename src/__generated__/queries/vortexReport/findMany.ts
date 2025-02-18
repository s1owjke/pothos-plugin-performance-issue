import { builder } from "src/builder";

import { VortexReportOrderBy } from "../../types/inputs/vortexReport/orderBy";
import { VortexReportWhere } from "../../types/inputs/vortexReport/where";
import { VortexReport } from "../../types/objects/vortexReport";

builder.queryField("vortexReportList", (t) =>
  t.prismaField({
    type: [VortexReport],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: VortexReportWhere }),
      orderBy: t.arg({ type: [VortexReportOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.vortexReport.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
