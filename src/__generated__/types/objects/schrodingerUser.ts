import { builder } from "src/builder";

import { GravityOverrideOrderBy } from "../inputs/gravityOverride/orderBy";
import { GravityOverrideWhere } from "../inputs/gravityOverride/where";
import { ImaginaryFriendOrderBy } from "../inputs/imaginaryFriend/orderBy";
import { ImaginaryFriendWhere } from "../inputs/imaginaryFriend/where";
import { InterdimensionalReceiptOrderBy } from "../inputs/interdimensionalReceipt/orderBy";
import { InterdimensionalReceiptWhere } from "../inputs/interdimensionalReceipt/where";
import { ReverseTransactionOrderBy } from "../inputs/reverseTransaction/orderBy";
import { ReverseTransactionWhere } from "../inputs/reverseTransaction/where";
import { ThoughtCacheOrderBy } from "../inputs/thoughtCache/orderBy";
import { ThoughtCacheWhere } from "../inputs/thoughtCache/where";

export const SchrodingerUser = builder.prismaObject("SchrodingerUser", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    dimensionalBackup: t.relation("dimensionalBackup", { nullable: true }),
    echoChamber: t.relation("echoChamber", { nullable: true }),
    ghostRecord: t.relation("ghostRecord", { nullable: true }),
    ghostRecordId: t.expose("ghostRecordId", { type: "ID", nullable: true }),
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
    infiniteScrollLog: t.relation("infiniteScrollLog", { nullable: true }),
    interdimensionalReceiptsList: t.relation("interdimensionalReceipts", {
      args: {
        where: t.arg({ type: InterdimensionalReceiptWhere, required: false }),
        orderBy: t.arg({ type: [InterdimensionalReceiptOrderBy], required: false }),
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
    interdimensionalReceiptsCount: t.relationCount("interdimensionalReceipts", {
      args: {
        where: t.arg({ type: InterdimensionalReceiptWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    lostAndNeverFound: t.relation("lostAndNeverFound", { nullable: true }),
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
    signalGrid: t.relation("signalGrid", { nullable: true }),
    symphonyChart: t.relation("symphonyChart", { nullable: true }),
    teleportationFailure: t.relation("teleportationFailure", { nullable: true }),
    thoughtCachesList: t.relation("thoughtCaches", {
      args: {
        where: t.arg({ type: ThoughtCacheWhere, required: false }),
        orderBy: t.arg({ type: [ThoughtCacheOrderBy], required: false }),
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
    thoughtCachesCount: t.relationCount("thoughtCaches", {
      args: {
        where: t.arg({ type: ThoughtCacheWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
  }),
});
