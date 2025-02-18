import { builder } from "src/builder";

import { AlternativeFactOrderBy } from "../inputs/alternativeFact/orderBy";
import { AlternativeFactWhere } from "../inputs/alternativeFact/where";
import { ConspiracyDraftOrderBy } from "../inputs/conspiracyDraft/orderBy";
import { ConspiracyDraftWhere } from "../inputs/conspiracyDraft/where";
import { PendingDisasterOrderBy } from "../inputs/pendingDisaster/orderBy";
import { PendingDisasterWhere } from "../inputs/pendingDisaster/where";
import { ThresholdManifestOrderBy } from "../inputs/thresholdManifest/orderBy";
import { ThresholdManifestWhere } from "../inputs/thresholdManifest/where";

export const GlitchRegistry = builder.prismaObject("GlitchRegistry", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    alternativeFactsList: t.relation("alternativeFacts", {
      args: {
        where: t.arg({ type: AlternativeFactWhere, required: false }),
        orderBy: t.arg({ type: [AlternativeFactOrderBy], required: false }),
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
    alternativeFactsCount: t.relationCount("alternativeFacts", {
      args: {
        where: t.arg({ type: AlternativeFactWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    conspiracyDraftsList: t.relation("conspiracyDrafts", {
      args: {
        where: t.arg({ type: ConspiracyDraftWhere, required: false }),
        orderBy: t.arg({ type: [ConspiracyDraftOrderBy], required: false }),
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
    conspiracyDraftsCount: t.relationCount("conspiracyDrafts", {
      args: {
        where: t.arg({ type: ConspiracyDraftWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    echoChamber: t.relation("echoChamber", { nullable: false }),
    overwrittenLegacy: t.relation("overwrittenLegacy", { nullable: true }),
    overwrittenLegacyId: t.expose("overwrittenLegacyId", { type: "ID", nullable: true }),
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
    verifierStaffId: t.expose("verifierStaffId", { type: "ID", nullable: false }),
  }),
});
