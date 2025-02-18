import { builder } from "src/builder";

import { GravityOverrideOrderBy } from "../inputs/gravityOverride/orderBy";
import { GravityOverrideWhere } from "../inputs/gravityOverride/where";
import { ReverseTransactionOrderBy } from "../inputs/reverseTransaction/orderBy";
import { ReverseTransactionWhere } from "../inputs/reverseTransaction/where";
import { SchrodingerUserOrderBy } from "../inputs/schrodingerUser/orderBy";
import { SchrodingerUserWhere } from "../inputs/schrodingerUser/where";

export const ImaginaryFriend = builder.prismaObject("ImaginaryFriend", {
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
    hypotheticalRevenue: t.relation("hypotheticalRevenue", { nullable: false }),
    hypotheticalRevenueId: t.expose("hypotheticalRevenueId", { type: "ID", nullable: false }),
    lostAndNeverFound: t.relation("lostAndNeverFound", { nullable: true }),
    lostAndNeverFoundId: t.expose("lostAndNeverFoundId", { type: "ID", nullable: true }),
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
  }),
});
