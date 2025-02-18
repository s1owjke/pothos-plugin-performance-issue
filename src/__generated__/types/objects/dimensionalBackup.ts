import { builder } from "src/builder";

import { GravityOverrideOrderBy } from "../inputs/gravityOverride/orderBy";
import { GravityOverrideWhere } from "../inputs/gravityOverride/where";
import { PortalIndexOrderBy } from "../inputs/portalIndex/orderBy";
import { PortalIndexWhere } from "../inputs/portalIndex/where";

export const DimensionalBackup = builder.prismaObject("DimensionalBackup", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
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
    thresholdManifest: t.relation("thresholdManifest", { nullable: false }),
    thresholdManifestId: t.expose("thresholdManifestId", { type: "ID", nullable: false }),
  }),
});
