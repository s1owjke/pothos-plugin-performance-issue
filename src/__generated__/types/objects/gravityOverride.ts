import { builder } from "src/builder";

import { DebuggingHistoryOrderBy } from "../inputs/debuggingHistory/orderBy";
import { DebuggingHistoryWhere } from "../inputs/debuggingHistory/where";
import { DoomedExperimentOrderBy } from "../inputs/doomedExperiment/orderBy";
import { DoomedExperimentWhere } from "../inputs/doomedExperiment/where";
import { EndlessLoopOrderBy } from "../inputs/endlessLoop/orderBy";
import { EndlessLoopWhere } from "../inputs/endlessLoop/where";
import { HyperlinkedUnicornOrderBy } from "../inputs/hyperlinkedUnicorn/orderBy";
import { HyperlinkedUnicornWhere } from "../inputs/hyperlinkedUnicorn/where";
import { MissingContextOrderBy } from "../inputs/missingContext/orderBy";
import { MissingContextWhere } from "../inputs/missingContext/where";
import { OverdueRevolutionOrderBy } from "../inputs/overdueRevolution/orderBy";
import { OverdueRevolutionWhere } from "../inputs/overdueRevolution/where";
import { PocketUniverseOrderBy } from "../inputs/pocketUniverse/orderBy";
import { PocketUniverseWhere } from "../inputs/pocketUniverse/where";
import { RecursiveRecursionOrderBy } from "../inputs/recursiveRecursion/orderBy";
import { RecursiveRecursionWhere } from "../inputs/recursiveRecursion/where";
import { SchrodingerUserOrderBy } from "../inputs/schrodingerUser/orderBy";
import { SchrodingerUserWhere } from "../inputs/schrodingerUser/where";
import { SecretSauceOrderBy } from "../inputs/secretSauce/orderBy";
import { SecretSauceWhere } from "../inputs/secretSauce/where";
import { SentientMetadatumOrderBy } from "../inputs/sentientMetadatum/orderBy";
import { SentientMetadatumWhere } from "../inputs/sentientMetadatum/where";
import { SpontaneousCombustionOrderBy } from "../inputs/spontaneousCombustion/orderBy";
import { SpontaneousCombustionWhere } from "../inputs/spontaneousCombustion/where";
import { UnderappreciatedCommentOrderBy } from "../inputs/underappreciatedComment/orderBy";
import { UnderappreciatedCommentWhere } from "../inputs/underappreciatedComment/where";

export const GravityOverride = builder.prismaObject("GravityOverride", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    dimensionalBackup: t.relation("dimensionalBackup", { nullable: true }),
    dimensionalBackupId: t.expose("dimensionalBackupId", { type: "ID", nullable: true }),
    debuggingHistoriesList: t.relation("debuggingHistories", {
      args: {
        where: t.arg({ type: DebuggingHistoryWhere, required: false }),
        orderBy: t.arg({ type: [DebuggingHistoryOrderBy], required: false }),
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
    debuggingHistoriesCount: t.relationCount("debuggingHistories", {
      args: {
        where: t.arg({ type: DebuggingHistoryWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    doomedExperimentsList: t.relation("doomedExperiments", {
      args: {
        where: t.arg({ type: DoomedExperimentWhere, required: false }),
        orderBy: t.arg({ type: [DoomedExperimentOrderBy], required: false }),
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
    doomedExperimentsCount: t.relationCount("doomedExperiments", {
      args: {
        where: t.arg({ type: DoomedExperimentWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    endlessLoopsList: t.relation("endlessLoops", {
      args: {
        where: t.arg({ type: EndlessLoopWhere, required: false }),
        orderBy: t.arg({ type: [EndlessLoopOrderBy], required: false }),
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
    endlessLoopsCount: t.relationCount("endlessLoops", {
      args: {
        where: t.arg({ type: EndlessLoopWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    hyperlinkedUnicornsList: t.relation("hyperlinkedUnicorns", {
      args: {
        where: t.arg({ type: HyperlinkedUnicornWhere, required: false }),
        orderBy: t.arg({ type: [HyperlinkedUnicornOrderBy], required: false }),
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
    hyperlinkedUnicornsCount: t.relationCount("hyperlinkedUnicorns", {
      args: {
        where: t.arg({ type: HyperlinkedUnicornWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    imaginaryFriend: t.relation("imaginaryFriend", { nullable: true }),
    imaginaryFriendId: t.expose("imaginaryFriendId", { type: "ID", nullable: true }),
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
    overdueRevolutionsList: t.relation("overdueRevolutions", {
      args: {
        where: t.arg({ type: OverdueRevolutionWhere, required: false }),
        orderBy: t.arg({ type: [OverdueRevolutionOrderBy], required: false }),
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
    overdueRevolutionsCount: t.relationCount("overdueRevolutions", {
      args: {
        where: t.arg({ type: OverdueRevolutionWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    pocketUniversesList: t.relation("pocketUniverses", {
      args: {
        where: t.arg({ type: PocketUniverseWhere, required: false }),
        orderBy: t.arg({ type: [PocketUniverseOrderBy], required: false }),
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
    pocketUniversesCount: t.relationCount("pocketUniverses", {
      args: {
        where: t.arg({ type: PocketUniverseWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    recursiveRecursionsList: t.relation("recursiveRecursions", {
      args: {
        where: t.arg({ type: RecursiveRecursionWhere, required: false }),
        orderBy: t.arg({ type: [RecursiveRecursionOrderBy], required: false }),
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
    recursiveRecursionsCount: t.relationCount("recursiveRecursions", {
      args: {
        where: t.arg({ type: RecursiveRecursionWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    reverseTransaction: t.relation("reverseTransaction", { nullable: true }),
    reverseTransactionId: t.expose("reverseTransactionId", { type: "ID", nullable: true }),
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
    secretSaucesList: t.relation("secretSauces", {
      args: {
        where: t.arg({ type: SecretSauceWhere, required: false }),
        orderBy: t.arg({ type: [SecretSauceOrderBy], required: false }),
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
    secretSaucesCount: t.relationCount("secretSauces", {
      args: {
        where: t.arg({ type: SecretSauceWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    sentientMetadatasList: t.relation("sentientMetadatas", {
      args: {
        where: t.arg({ type: SentientMetadatumWhere, required: false }),
        orderBy: t.arg({ type: [SentientMetadatumOrderBy], required: false }),
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
    sentientMetadatasCount: t.relationCount("sentientMetadatas", {
      args: {
        where: t.arg({ type: SentientMetadatumWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    spontaneousCombustionsList: t.relation("spontaneousCombustions", {
      args: {
        where: t.arg({ type: SpontaneousCombustionWhere, required: false }),
        orderBy: t.arg({ type: [SpontaneousCombustionOrderBy], required: false }),
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
    spontaneousCombustionsCount: t.relationCount("spontaneousCombustions", {
      args: {
        where: t.arg({ type: SpontaneousCombustionWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    thresholdManifest: t.relation("thresholdManifest", { nullable: false }),
    thresholdManifestId: t.expose("thresholdManifestId", { type: "ID", nullable: false }),
    unassignedDestiny: t.relation("unassignedDestiny", { nullable: true }),
    unassignedDestinyId: t.expose("unassignedDestinyId", { type: "ID", nullable: true }),
    underappreciatedCommentsList: t.relation("underappreciatedComments", {
      args: {
        where: t.arg({ type: UnderappreciatedCommentWhere, required: false }),
        orderBy: t.arg({ type: [UnderappreciatedCommentOrderBy], required: false }),
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
    underappreciatedCommentsCount: t.relationCount("underappreciatedComments", {
      args: {
        where: t.arg({ type: UnderappreciatedCommentWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    unstableFrequency: t.relation("unstableFrequency", { nullable: true }),
    unstableFrequencyId: t.expose("unstableFrequencyId", { type: "ID", nullable: true }),
  }),
});
