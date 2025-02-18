import { builder } from "src/builder";

import { PortalIndexOrderBy } from "../inputs/portalIndex/orderBy";
import { PortalIndexWhere } from "../inputs/portalIndex/where";
import { SymphonyChartOrderBy } from "../inputs/symphonyChart/orderBy";
import { SymphonyChartWhere } from "../inputs/symphonyChart/where";
import { ThresholdManifestOrderBy } from "../inputs/thresholdManifest/orderBy";
import { ThresholdManifestWhere } from "../inputs/thresholdManifest/where";

export const TeleportationFailure = builder.prismaObject("TeleportationFailure", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    portalIndexesList: t.relation("portalIndexes", {
      args: {
        where: t.arg({ type: PortalIndexWhere, required: false }),
        orderBy: t.arg({ type: [PortalIndexOrderBy], required: false }),
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
    portalIndexesCount: t.relationCount("portalIndexes", {
      args: {
        where: t.arg({ type: PortalIndexWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    schrodingerUser: t.relation("schrodingerUser", { nullable: false }),
    schrodingerUserId: t.expose("schrodingerUserId", { type: "ID", nullable: false }),
    symphonyChartsList: t.relation("symphonyCharts", {
      args: {
        where: t.arg({ type: SymphonyChartWhere, required: false }),
        orderBy: t.arg({ type: [SymphonyChartOrderBy], required: false }),
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
    symphonyChartsCount: t.relationCount("symphonyCharts", {
      args: {
        where: t.arg({ type: SymphonyChartWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    thresholdManifestsList: t.relation("thresholdManifests", {
      args: {
        where: t.arg({ type: ThresholdManifestWhere, required: false }),
        orderBy: t.arg({ type: [ThresholdManifestOrderBy], required: false }),
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
    thresholdManifestsCount: t.relationCount("thresholdManifests", {
      args: {
        where: t.arg({ type: ThresholdManifestWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    vortexReport: t.relation("vortexReport", { nullable: false }),
    vortexReportId: t.expose("vortexReportId", { type: "ID", nullable: false }),
  }),
});
