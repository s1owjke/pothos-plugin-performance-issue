import { builder } from "src/builder";

import { HypotheticalRevenueOrderBy } from "../inputs/hypotheticalRevenue/orderBy";
import { HypotheticalRevenueWhere } from "../inputs/hypotheticalRevenue/where";
import { RejectedTheoryOrderBy } from "../inputs/rejectedTheory/orderBy";
import { RejectedTheoryWhere } from "../inputs/rejectedTheory/where";
import { VortexReportOrderBy } from "../inputs/vortexReport/orderBy";
import { VortexReportWhere } from "../inputs/vortexReport/where";

export const GhostRecord = builder.prismaObject("GhostRecord", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    artificialPotato: t.relation("artificialPotato", { nullable: true }),
    classifiedSilliness: t.relation("classifiedSilliness", { nullable: true }),
    hypotheticalRevenuesList: t.relation("hypotheticalRevenues", {
      args: {
        where: t.arg({ type: HypotheticalRevenueWhere, required: false }),
        orderBy: t.arg({ type: [HypotheticalRevenueOrderBy], required: false }),
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
    hypotheticalRevenuesCount: t.relationCount("hypotheticalRevenues", {
      args: {
        where: t.arg({ type: HypotheticalRevenueWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    portalIndex: t.relation("portalIndex", { nullable: true }),
    rejectedTheoriesList: t.relation("rejectedTheories", {
      args: {
        where: t.arg({ type: RejectedTheoryWhere, required: false }),
        orderBy: t.arg({ type: [RejectedTheoryOrderBy], required: false }),
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
    rejectedTheoriesCount: t.relationCount("rejectedTheories", {
      args: {
        where: t.arg({ type: RejectedTheoryWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    schrodingerUser: t.relation("schrodingerUser", { nullable: true }),
    symphonyChart: t.relation("symphonyChart", { nullable: true }),
    thresholdManifest: t.relation("thresholdManifest", { nullable: true }),
    thresholdManifestId: t.expose("thresholdManifestId", { type: "ID", nullable: true }),
    vortexReportsList: t.relation("vortexReports", {
      args: {
        where: t.arg({ type: VortexReportWhere, required: false }),
        orderBy: t.arg({ type: [VortexReportOrderBy], required: false }),
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
    vortexReportsCount: t.relationCount("vortexReports", {
      args: {
        where: t.arg({ type: VortexReportWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
  }),
});
