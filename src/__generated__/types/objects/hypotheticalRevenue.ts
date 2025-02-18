import { builder } from "src/builder";

import { ConspiracyDraftOrderBy } from "../inputs/conspiracyDraft/orderBy";
import { ConspiracyDraftWhere } from "../inputs/conspiracyDraft/where";
import { ImaginaryFriendOrderBy } from "../inputs/imaginaryFriend/orderBy";
import { ImaginaryFriendWhere } from "../inputs/imaginaryFriend/where";
import { LostAndNeverFoundOrderBy } from "../inputs/lostAndNeverFound/orderBy";
import { LostAndNeverFoundWhere } from "../inputs/lostAndNeverFound/where";
import { ThresholdManifestOrderBy } from "../inputs/thresholdManifest/orderBy";
import { ThresholdManifestWhere } from "../inputs/thresholdManifest/where";
import { VortexReportOrderBy } from "../inputs/vortexReport/orderBy";
import { VortexReportWhere } from "../inputs/vortexReport/where";

export const HypotheticalRevenue = builder.prismaObject("HypotheticalRevenue", {
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
    imaginaryFriendsList: t.relation("imaginaryFriends", {
      args: {
        where: t.arg({ type: ImaginaryFriendWhere, required: false }),
        orderBy: t.arg({ type: [ImaginaryFriendOrderBy], required: false }),
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
    imaginaryFriendsCount: t.relationCount("imaginaryFriends", {
      args: {
        where: t.arg({ type: ImaginaryFriendWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    infiniteUndo: t.relation("infiniteUndo", { nullable: true }),
    infiniteUndoId: t.expose("infiniteUndoId", { type: "ID", nullable: true }),
    lostAndNeverFoundsList: t.relation("lostAndNeverFounds", {
      args: {
        where: t.arg({ type: LostAndNeverFoundWhere, required: false }),
        orderBy: t.arg({ type: [LostAndNeverFoundOrderBy], required: false }),
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
    lostAndNeverFoundsCount: t.relationCount("lostAndNeverFounds", {
      args: {
        where: t.arg({ type: LostAndNeverFoundWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    realmDirectory: t.relation("realmDirectory", { nullable: true }),
    realmDirectoryId: t.expose("realmDirectoryId", { type: "ID", nullable: true }),
    suspiciousTimestamp: t.relation("suspiciousTimestamp", { nullable: true }),
    suspiciousTimestampId: t.expose("suspiciousTimestampId", { type: "ID", nullable: true }),
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
