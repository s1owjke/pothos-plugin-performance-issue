import { builder } from "src/builder";

import { ArtificialPotatoOrderBy } from "../inputs/artificialPotato/orderBy";
import { ArtificialPotatoWhere } from "../inputs/artificialPotato/where";
import { BananaQueueOrderBy } from "../inputs/bananaQueue/orderBy";
import { BananaQueueWhere } from "../inputs/bananaQueue/where";
import { ClassifiedSillinessOrderBy } from "../inputs/classifiedSilliness/orderBy";
import { ClassifiedSillinessWhere } from "../inputs/classifiedSilliness/where";
import { CosmicDebriOrderBy } from "../inputs/cosmicDebri/orderBy";
import { CosmicDebriWhere } from "../inputs/cosmicDebri/where";
import { GravityOverrideOrderBy } from "../inputs/gravityOverride/orderBy";
import { GravityOverrideWhere } from "../inputs/gravityOverride/where";
import { HypotheticalRevenueOrderBy } from "../inputs/hypotheticalRevenue/orderBy";
import { HypotheticalRevenueWhere } from "../inputs/hypotheticalRevenue/where";
import { ImaginaryFriendOrderBy } from "../inputs/imaginaryFriend/orderBy";
import { ImaginaryFriendWhere } from "../inputs/imaginaryFriend/where";
import { PendingDisasterOrderBy } from "../inputs/pendingDisaster/orderBy";
import { PendingDisasterWhere } from "../inputs/pendingDisaster/where";
import { PortalIndexOrderBy } from "../inputs/portalIndex/orderBy";
import { PortalIndexWhere } from "../inputs/portalIndex/where";
import { QuantumInvoiceOrderBy } from "../inputs/quantumInvoice/orderBy";
import { QuantumInvoiceWhere } from "../inputs/quantumInvoice/where";
import { RealmDirectoryOrderBy } from "../inputs/realmDirectory/orderBy";
import { RealmDirectoryWhere } from "../inputs/realmDirectory/where";
import { ReverseTransactionOrderBy } from "../inputs/reverseTransaction/orderBy";
import { ReverseTransactionWhere } from "../inputs/reverseTransaction/where";
import { SymphonyChartOrderBy } from "../inputs/symphonyChart/orderBy";
import { SymphonyChartWhere } from "../inputs/symphonyChart/where";
import { ThresholdManifestOrderBy } from "../inputs/thresholdManifest/orderBy";
import { ThresholdManifestWhere } from "../inputs/thresholdManifest/where";
import { TimeTravelLogOrderBy } from "../inputs/timeTravelLog/orderBy";
import { TimeTravelLogWhere } from "../inputs/timeTravelLog/where";
import { UnfinishedSymphonyOrderBy } from "../inputs/unfinishedSymphony/orderBy";
import { UnfinishedSymphonyWhere } from "../inputs/unfinishedSymphony/where";
import { VortexReportOrderBy } from "../inputs/vortexReport/orderBy";
import { VortexReportWhere } from "../inputs/vortexReport/where";
import { WormholeRentalOrderBy } from "../inputs/wormholeRental/orderBy";
import { WormholeRentalWhere } from "../inputs/wormholeRental/where";

export const UnstableFrequency = builder.prismaObject("UnstableFrequency", {
  fields: (t) => ({
    id: t.expose("id", { type: "ID", nullable: false }),
    createdAt: t.expose("createdAt", { type: "DateTime", nullable: false }),
    updatedAt: t.expose("updatedAt", { type: "DateTime", nullable: false }),
    artificialPotatoesList: t.relation("artificialPotatoes", {
      args: {
        where: t.arg({ type: ArtificialPotatoWhere, required: false }),
        orderBy: t.arg({ type: [ArtificialPotatoOrderBy], required: false }),
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
    artificialPotatoesCount: t.relationCount("artificialPotatoes", {
      args: {
        where: t.arg({ type: ArtificialPotatoWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    bananaQueuesList: t.relation("bananaQueues", {
      args: {
        where: t.arg({ type: BananaQueueWhere, required: false }),
        orderBy: t.arg({ type: [BananaQueueOrderBy], required: false }),
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
    bananaQueuesCount: t.relationCount("bananaQueues", {
      args: {
        where: t.arg({ type: BananaQueueWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
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
    cosmicDebrisesList: t.relation("cosmicDebrises", {
      args: {
        where: t.arg({ type: CosmicDebriWhere, required: false }),
        orderBy: t.arg({ type: [CosmicDebriOrderBy], required: false }),
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
    cosmicDebrisesCount: t.relationCount("cosmicDebrises", {
      args: {
        where: t.arg({ type: CosmicDebriWhere, required: false }),
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
    hypotheticalRevenueeList: t.relation("hypotheticalRevenuee", {
      args: {
        where: t.arg({ type: HypotheticalRevenueWhere, required: false }),
        orderBy: t.arg({ type: [HypotheticalRevenueOrderBy], required: false }),
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
    hypotheticalRevenueeCount: t.relationCount("hypotheticalRevenuee", {
      args: {
        where: t.arg({ type: HypotheticalRevenueWhere, required: false }),
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
    imaginaryFriends2List: t.relation("imaginaryFriends2", {
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
    imaginaryFriends2Count: t.relationCount("imaginaryFriends2", {
      args: {
        where: t.arg({ type: ImaginaryFriendWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
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
    quantumInvoicesList: t.relation("quantumInvoices", {
      args: {
        where: t.arg({ type: QuantumInvoiceWhere, required: false }),
        orderBy: t.arg({ type: [QuantumInvoiceOrderBy], required: false }),
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
    quantumInvoicesCount: t.relationCount("quantumInvoices", {
      args: {
        where: t.arg({ type: QuantumInvoiceWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    realmDirectoriesList: t.relation("realmDirectories", {
      args: {
        where: t.arg({ type: RealmDirectoryWhere, required: false }),
        orderBy: t.arg({ type: [RealmDirectoryOrderBy], required: false }),
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
    realmDirectoriesCount: t.relationCount("realmDirectories", {
      args: {
        where: t.arg({ type: RealmDirectoryWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    reverseTransactionList: t.relation("reverseTransaction", {
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
    reverseTransactionCount: t.relationCount("reverseTransaction", {
      args: {
        where: t.arg({ type: ReverseTransactionWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    reverseTransaction2List: t.relation("reverseTransaction2", {
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
    reverseTransaction2Count: t.relationCount("reverseTransaction2", {
      args: {
        where: t.arg({ type: ReverseTransactionWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    symphonyChartsList: t.relation("symphonyCharts", {
      args: {
        where: t.arg({ type: SymphonyChartWhere, required: false }),
        orderBy: t.arg({ type: [SymphonyChartOrderBy], required: false }),
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
    symphonyChartsCount: t.relationCount("symphonyCharts", {
      args: {
        where: t.arg({ type: SymphonyChartWhere, required: false }),
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
    timeTravelLogsList: t.relation("timeTravelLogs", {
      args: {
        where: t.arg({ type: TimeTravelLogWhere, required: false }),
        orderBy: t.arg({ type: [TimeTravelLogOrderBy], required: false }),
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
    timeTravelLogsCount: t.relationCount("timeTravelLogs", {
      args: {
        where: t.arg({ type: TimeTravelLogWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
    unfinishedSymphoniesList: t.relation("unfinishedSymphonies", {
      args: {
        where: t.arg({ type: UnfinishedSymphonyWhere, required: false }),
        orderBy: t.arg({ type: [UnfinishedSymphonyOrderBy], required: false }),
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
    unfinishedSymphoniesCount: t.relationCount("unfinishedSymphonies", {
      args: {
        where: t.arg({ type: UnfinishedSymphonyWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
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
    wormholeRentalsList: t.relation("wormholeRentals", {
      args: {
        where: t.arg({ type: WormholeRentalWhere, required: false }),
        orderBy: t.arg({ type: [WormholeRentalOrderBy], required: false }),
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
    wormholeRentalsCount: t.relationCount("wormholeRentals", {
      args: {
        where: t.arg({ type: WormholeRentalWhere, required: false }),
      },
      where: (args) => args.where || {},
    }),
  }),
});
