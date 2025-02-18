import { builder } from "src/builder";

import { PendingDisasterOrderBy } from "../inputs/pendingDisaster/orderBy";
import { PendingDisasterWhere } from "../inputs/pendingDisaster/where";

export const EmotionalSupportTable = builder.prismaObject("EmotionalSupportTable", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    infiniteScrollLog: t.relation("infiniteScrollLog", { nullable: false }),
    infiniteScrollLogId: t.expose("infiniteScrollLogId", { type: "ID", nullable: false }),
    pendingDisastersList: t.relation("pendingDisasters", {
      args: {
        where: t.arg({ type: PendingDisasterWhere, required: false }),
        orderBy: t.arg({ type: [PendingDisasterOrderBy], required: false }),
        take: t.arg({ type: "Int", required: false }),
        skip: t.arg({ type: "Int", required: false }),
      },
      query: (args) => {
        if (args.take && args.take > 1000) {
          throw new Error("Pagination limit couldn't be greater than 1000");
        }

        return {
          where: args.where || undefined,
          orderBy: args.orderBy || undefined,
          take: args.take || 1000,
          skip: args.skip || 0,
        };
      },
    }),
    pendingDisastersCount: t.relationCount("pendingDisasters", {
      args: {
        where: t.arg({ type: PendingDisasterWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    singularityReport: t.relation("singularityReport", { nullable: false }),
    singularityReportId: t.expose("singularityReportId", { type: "ID", nullable: false }),
    symphonyChart: t.relation("symphonyChart", { nullable: false }),
    symphonyChartId: t.expose("symphonyChartId", { type: "ID", nullable: false }),
  }),
});
