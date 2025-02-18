import { builder } from "src/builder";

import { ConspiracyDraftOrderBy } from "../inputs/conspiracyDraft/orderBy";
import { ConspiracyDraftWhere } from "../inputs/conspiracyDraft/where";
import { ReverseTransactionOrderBy } from "../inputs/reverseTransaction/orderBy";
import { ReverseTransactionWhere } from "../inputs/reverseTransaction/where";
import { TeleportationFailureOrderBy } from "../inputs/teleportationFailure/orderBy";
import { TeleportationFailureWhere } from "../inputs/teleportationFailure/where";
import { ThresholdManifestOrderBy } from "../inputs/thresholdManifest/orderBy";
import { ThresholdManifestWhere } from "../inputs/thresholdManifest/where";

export const VortexReport = builder.prismaObject("VortexReport", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
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
    cosmicDebris: t.relation("cosmicDebris", { nullable: true }),
    cosmicDebrisId: t.expose("cosmicDebrisId", { type: "ID", nullable: true }),
    ghostRecord: t.relation("ghostRecord", { nullable: true }),
    ghostRecordId: t.expose("ghostRecordId", { type: "ID", nullable: true }),
    hypotheticalRevenue: t.relation("hypotheticalRevenue", { nullable: true }),
    hypotheticalRevenueId: t.expose("hypotheticalRevenueId", { type: "ID", nullable: true }),
    infiniteUndo: t.relation("infiniteUndo", { nullable: true }),
    infiniteUndoId: t.expose("infiniteUndoId", { type: "ID", nullable: true }),
    realmDirectory: t.relation("realmDirectory", { nullable: true }),
    realmDirectoryId: t.expose("realmDirectoryId", { type: "ID", nullable: true }),
    reverseTransactionsList: t.relation("reverseTransactions", {
      args: {
        where: t.arg({ type: ReverseTransactionWhere, required: false }),
        orderBy: t.arg({ type: [ReverseTransactionOrderBy], required: false }),
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
    reverseTransactionsCount: t.relationCount("reverseTransactions", {
      args: {
        where: t.arg({ type: ReverseTransactionWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    suspiciousTimestamp: t.relation("suspiciousTimestamp", { nullable: true }),
    suspiciousTimestampId: t.expose("suspiciousTimestampId", { type: "ID", nullable: true }),
    teleportationFailuresList: t.relation("teleportationFailures", {
      args: {
        where: t.arg({ type: TeleportationFailureWhere, required: false }),
        orderBy: t.arg({ type: [TeleportationFailureOrderBy], required: false }),
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
    teleportationFailuresCount: t.relationCount("teleportationFailures", {
      args: {
        where: t.arg({ type: TeleportationFailureWhere, required: false }),
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
    timeTravelLog: t.relation("timeTravelLog", { nullable: true }),
    timeTravelLogId: t.expose("timeTravelLogId", { type: "ID", nullable: true }),
    unnecessaryPermission: t.relation("unnecessaryPermission", { nullable: true }),
    unnecessaryPermissionId: t.expose("unnecessaryPermissionId", { type: "ID", nullable: true }),
    unstableFrequency: t.relation("unstableFrequency", { nullable: true }),
    unstableFrequencyId: t.expose("unstableFrequencyId", { type: "ID", nullable: true }),
  }),
});
