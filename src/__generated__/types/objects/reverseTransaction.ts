import { builder } from "src/builder";

import { GravityOverrideOrderBy } from "../inputs/gravityOverride/orderBy";
import { GravityOverrideWhere } from "../inputs/gravityOverride/where";
import { SchrodingerUserOrderBy } from "../inputs/schrodingerUser/orderBy";
import { SchrodingerUserWhere } from "../inputs/schrodingerUser/where";

export const ReverseTransaction = builder.prismaObject("ReverseTransaction", {
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
    imaginaryFriend: t.relation("imaginaryFriend", { nullable: true }),
    imaginaryFriendId: t.expose("imaginaryFriendId", { type: "ID", nullable: true }),
    schrodingerUsersToNotifyList: t.relation("schrodingerUsersToNotify", {
      args: {
        where: t.arg({ type: SchrodingerUserWhere, required: false }),
        orderBy: t.arg({ type: [SchrodingerUserOrderBy], required: false }),
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
    schrodingerUsersToNotifyCount: t.relationCount("schrodingerUsersToNotify", {
      args: {
        where: t.arg({ type: SchrodingerUserWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    unassignedDestiny: t.relation("unassignedDestiny", { nullable: true }),
    unassignedDestinyId: t.expose("unassignedDestinyId", { type: "ID", nullable: true }),
    unstableFrequency: t.relation("unstableFrequency", { nullable: true }),
    unstableFrequency2: t.relation("unstableFrequency2", { nullable: true }),
    unstableFrequencyId: t.expose("unstableFrequencyId", { type: "ID", nullable: true }),
    unstableFrequencyId2: t.expose("unstableFrequencyId2", { type: "ID", nullable: true }),
    vortexReport: t.relation("vortexReport", { nullable: false }),
    vortexReportId: t.expose("vortexReportId", { type: "ID", nullable: false }),
  }),
});
