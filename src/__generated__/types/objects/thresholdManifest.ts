import { builder } from "src/builder";

import { ClassifiedSillinessOrderBy } from "../inputs/classifiedSilliness/orderBy";
import { ClassifiedSillinessWhere } from "../inputs/classifiedSilliness/where";
import { ConspiracyDraftOrderBy } from "../inputs/conspiracyDraft/orderBy";
import { ConspiracyDraftWhere } from "../inputs/conspiracyDraft/where";
import { DimensionalBackupOrderBy } from "../inputs/dimensionalBackup/orderBy";
import { DimensionalBackupWhere } from "../inputs/dimensionalBackup/where";
import { ForbiddenCheeseburgerOrderBy } from "../inputs/forbiddenCheeseburger/orderBy";
import { ForbiddenCheeseburgerWhere } from "../inputs/forbiddenCheeseburger/where";
import { GhostRecordOrderBy } from "../inputs/ghostRecord/orderBy";
import { GhostRecordWhere } from "../inputs/ghostRecord/where";
import { GlitchRegistryOrderBy } from "../inputs/glitchRegistry/orderBy";
import { GlitchRegistryWhere } from "../inputs/glitchRegistry/where";
import { GloriousMistakeOrderBy } from "../inputs/gloriousMistake/orderBy";
import { GloriousMistakeWhere } from "../inputs/gloriousMistake/where";
import { GravityOverrideOrderBy } from "../inputs/gravityOverride/orderBy";
import { GravityOverrideWhere } from "../inputs/gravityOverride/where";
import { HalfBakedIdeaOrderBy } from "../inputs/halfBakedIdea/orderBy";
import { HalfBakedIdeaWhere } from "../inputs/halfBakedIdea/where";
import { InfiniteScrollLogOrderBy } from "../inputs/infiniteScrollLog/orderBy";
import { InfiniteScrollLogWhere } from "../inputs/infiniteScrollLog/where";
import { PendingDisasterOrderBy } from "../inputs/pendingDisaster/orderBy";
import { PendingDisasterWhere } from "../inputs/pendingDisaster/where";
import { RejectedTheoryOrderBy } from "../inputs/rejectedTheory/orderBy";
import { RejectedTheoryWhere } from "../inputs/rejectedTheory/where";
import { StaticWhisperOrderBy } from "../inputs/staticWhisper/orderBy";
import { StaticWhisperWhere } from "../inputs/staticWhisper/where";
import { TeleportationFailureOrderBy } from "../inputs/teleportationFailure/orderBy";
import { TeleportationFailureWhere } from "../inputs/teleportationFailure/where";

export const ThresholdManifest = builder.prismaObject("ThresholdManifest", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    classifiedSillinessesList: t.relation("classifiedSillinesses", {
      args: {
        where: t.arg({ type: ClassifiedSillinessWhere, required: false }),
        orderBy: t.arg({ type: [ClassifiedSillinessOrderBy], required: false }),
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
    classifiedSillinessesCount: t.relationCount("classifiedSillinesses", {
      args: {
        where: t.arg({ type: ClassifiedSillinessWhere, required: false }),
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
    cosmicDebris: t.relation("cosmicDebris", { nullable: true }),
    cosmicDebrisId: t.expose("cosmicDebrisId", { type: "ID", nullable: true }),
    dimensionalBackupsList: t.relation("dimensionalBackups", {
      args: {
        where: t.arg({ type: DimensionalBackupWhere, required: false }),
        orderBy: t.arg({ type: [DimensionalBackupOrderBy], required: false }),
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
    dimensionalBackupsCount: t.relationCount("dimensionalBackups", {
      args: {
        where: t.arg({ type: DimensionalBackupWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    forbiddenCheeseburgersList: t.relation("forbiddenCheeseburgers", {
      args: {
        where: t.arg({ type: ForbiddenCheeseburgerWhere, required: false }),
        orderBy: t.arg({ type: [ForbiddenCheeseburgerOrderBy], required: false }),
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
    forbiddenCheeseburgersCount: t.relationCount("forbiddenCheeseburgers", {
      args: {
        where: t.arg({ type: ForbiddenCheeseburgerWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    ghostRecordId: t.expose("ghostRecordId", { type: "String", nullable: true }),
    ghostRecordsList: t.relation("ghostRecords", {
      args: {
        where: t.arg({ type: GhostRecordWhere, required: false }),
        orderBy: t.arg({ type: [GhostRecordOrderBy], required: false }),
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
    ghostRecordsCount: t.relationCount("ghostRecords", {
      args: {
        where: t.arg({ type: GhostRecordWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    glitchRegistiesList: t.relation("glitchRegisties", {
      args: {
        where: t.arg({ type: GlitchRegistryWhere, required: false }),
        orderBy: t.arg({ type: [GlitchRegistryOrderBy], required: false }),
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
    glitchRegistiesCount: t.relationCount("glitchRegisties", {
      args: {
        where: t.arg({ type: GlitchRegistryWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    gloriousMistakesList: t.relation("gloriousMistakes", {
      args: {
        where: t.arg({ type: GloriousMistakeWhere, required: false }),
        orderBy: t.arg({ type: [GloriousMistakeOrderBy], required: false }),
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
    gloriousMistakesCount: t.relationCount("gloriousMistakes", {
      args: {
        where: t.arg({ type: GloriousMistakeWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    gravityOverridesList: t.relation("gravityOverrides", {
      args: {
        where: t.arg({ type: GravityOverrideWhere, required: false }),
        orderBy: t.arg({ type: [GravityOverrideOrderBy], required: false }),
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
    gravityOverridesCount: t.relationCount("gravityOverrides", {
      args: {
        where: t.arg({ type: GravityOverrideWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    halfBakedIdeasList: t.relation("halfBakedIdeas", {
      args: {
        where: t.arg({ type: HalfBakedIdeaWhere, required: false }),
        orderBy: t.arg({ type: [HalfBakedIdeaOrderBy], required: false }),
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
    halfBakedIdeasCount: t.relationCount("halfBakedIdeas", {
      args: {
        where: t.arg({ type: HalfBakedIdeaWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    hypotheticalRevenue: t.relation("hypotheticalRevenue", { nullable: true }),
    hypotheticalRevenueId: t.expose("hypotheticalRevenueId", { type: "ID", nullable: true }),
    infiniteScrollLogList: t.relation("infiniteScrollLog", {
      args: {
        where: t.arg({ type: InfiniteScrollLogWhere, required: false }),
        orderBy: t.arg({ type: [InfiniteScrollLogOrderBy], required: false }),
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
    infiniteScrollLogCount: t.relationCount("infiniteScrollLog", {
      args: {
        where: t.arg({ type: InfiniteScrollLogWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    infiniteUndo: t.relation("infiniteUndo", { nullable: true }),
    infiniteUndoId: t.expose("infiniteUndoId", { type: "ID", nullable: true }),
    metaphysicalReceipt: t.relation("metaphysicalReceipt", { nullable: true }),
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
    realmDirectory: t.relation("realmDirectory", { nullable: true }),
    realmDirectoryId: t.expose("realmDirectoryId", { type: "ID", nullable: true }),
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
    staticWhispersList: t.relation("staticWhispers", {
      args: {
        where: t.arg({ type: StaticWhisperWhere, required: false }),
        orderBy: t.arg({ type: [StaticWhisperOrderBy], required: false }),
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
    staticWhispersCount: t.relationCount("staticWhispers", {
      args: {
        where: t.arg({ type: StaticWhisperWhere, required: false }),
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
    timeTravelLog: t.relation("timeTravelLog", { nullable: true }),
    timeTravelLogId: t.expose("timeTravelLogId", { type: "ID", nullable: true }),
    unnecessaryPermission: t.relation("unnecessaryPermission", { nullable: true }),
    unnecessaryPermissionId: t.expose("unnecessaryPermissionId", { type: "ID", nullable: true }),
    unstableFrequency: t.relation("unstableFrequency", { nullable: true }),
    unstableFrequencyId: t.expose("unstableFrequencyId", { type: "ID", nullable: true }),
    vortexReport: t.relation("vortexReport", { nullable: true }),
    vortexReportId: t.expose("vortexReportId", { type: "ID", nullable: true }),
  }),
});
