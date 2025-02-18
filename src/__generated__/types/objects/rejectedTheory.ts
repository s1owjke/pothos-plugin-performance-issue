import { builder } from "src/builder";

import { PortalIndexOrderBy } from "../inputs/portalIndex/orderBy";
import { PortalIndexWhere } from "../inputs/portalIndex/where";
import { RejectedTheoryOrderBy } from "../inputs/rejectedTheory/orderBy";
import { RejectedTheoryWhere } from "../inputs/rejectedTheory/where";

export const RejectedTheory = builder.prismaObject("RejectedTheory", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    childRejectedTheoriesList: t.relation("childRejectedTheories", {
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
    childRejectedTheoriesCount: t.relationCount("childRejectedTheories", {
      args: {
        where: t.arg({ type: RejectedTheoryWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    ghostRecord: t.relation("ghostRecord", { nullable: true }),
    ghostRecordId: t.expose("ghostRecordId", { type: "ID", nullable: true }),
    parentRejectedTheory: t.relation("parentRejectedTheory", { nullable: true }),
    parentRejectedTheoryId: t.expose("parentRejectedTheoryId", { type: "ID", nullable: true }),
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
    thresholdManifest: t.relation("thresholdManifest", { nullable: true }),
    thresholdManifestId: t.expose("thresholdManifestId", { type: "ID", nullable: true }),
  }),
});
