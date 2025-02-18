import { builder } from "src/builder";

import { SingularityReportOrderBy } from "../../types/inputs/singularityReport/orderBy";
import { SingularityReportWhere } from "../../types/inputs/singularityReport/where";
import { SingularityReport } from "../../types/objects/singularityReport";

builder.queryField("singularityReportList", (t) =>
  t.prismaField({
    type: [SingularityReport],
    nullable: { list: false, items: false },
    args: {
      where: t.arg({ type: SingularityReportWhere }),
      orderBy: t.arg({ type: [SingularityReportOrderBy] }),
      take: t.arg.int(),
      skip: t.arg.int(),
    },
    resolve: (query, root, args, { dbRls }) => {
      if (args.take && args.take > 1000) {
        throw new Error("Pagination limit couldn't be greater than 1000");
      }

      return dbRls.singularityReport.findMany({
        ...query,
        where: args.where || undefined,
        orderBy: args.orderBy || undefined,
        take: args.take || 1000,
        skip: args.skip || 0,
      });
    },
  }),
);
