import { builder } from "src/builder";

import { ClassifiedSillinessOrderBy } from "../inputs/classifiedSilliness/orderBy";
import { ClassifiedSillinessWhere } from "../inputs/classifiedSilliness/where";
import { DimensionalBackupOrderBy } from "../inputs/dimensionalBackup/orderBy";
import { DimensionalBackupWhere } from "../inputs/dimensionalBackup/where";
import { MissingContextOrderBy } from "../inputs/missingContext/orderBy";
import { MissingContextWhere } from "../inputs/missingContext/where";
import { RejectedTheoryOrderBy } from "../inputs/rejectedTheory/orderBy";
import { RejectedTheoryWhere } from "../inputs/rejectedTheory/where";
import { TeleportationFailureOrderBy } from "../inputs/teleportationFailure/orderBy";
import { TeleportationFailureWhere } from "../inputs/teleportationFailure/where";

export const PortalIndex = builder.prismaObject("PortalIndex", {
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
    ghostRecord: t.relation("ghostRecord", { nullable: true }),
    ghostRecordId: t.expose("ghostRecordId", { type: "ID", nullable: true }),
    missingContextsList: t.relation("missingContexts", {
      args: {
        where: t.arg({ type: MissingContextWhere, required: false }),
        orderBy: t.arg({ type: [MissingContextOrderBy], required: false }),
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
    missingContextsCount: t.relationCount("missingContexts", {
      args: {
        where: t.arg({ type: MissingContextWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
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
    unstableFrequency: t.relation("unstableFrequency", { nullable: true }),
    unstableFrequencyId: t.expose("unstableFrequencyId", { type: "ID", nullable: true }),
  }),
});
