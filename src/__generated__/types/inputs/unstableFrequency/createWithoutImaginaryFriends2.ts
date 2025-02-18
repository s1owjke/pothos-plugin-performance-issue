import { builder } from "src/builder";

import { ArtificialPotatoCreateRelationListWithoutUnstableFrequency } from "../artificialPotato/createRelationListWithoutUnstableFrequency";
import { BananaQueueCreateRelationListWithoutUnstableFrequency } from "../bananaQueue/createRelationListWithoutUnstableFrequency";
import { ClassifiedSillinessCreateRelationListWithoutUnstableFrequency } from "../classifiedSilliness/createRelationListWithoutUnstableFrequency";
import { CosmicDebriCreateRelationListWithoutUnstableFrequency } from "../cosmicDebri/createRelationListWithoutUnstableFrequency";
import { GravityOverrideCreateRelationListWithoutUnstableFrequency } from "../gravityOverride/createRelationListWithoutUnstableFrequency";
import { HypotheticalRevenueCreateRelationListWithoutUnstableFrequency } from "../hypotheticalRevenue/createRelationListWithoutUnstableFrequency";
import { ImaginaryFriendCreateRelationListWithoutUnstableFrequency } from "../imaginaryFriend/createRelationListWithoutUnstableFrequency";
import { PendingDisasterCreateRelationListWithoutUnstableFrequency } from "../pendingDisaster/createRelationListWithoutUnstableFrequency";
import { PortalIndexCreateRelationListWithoutUnstableFrequency } from "../portalIndex/createRelationListWithoutUnstableFrequency";
import { QuantumInvoiceCreateRelationListWithoutUnstableFrequency } from "../quantumInvoice/createRelationListWithoutUnstableFrequency";
import { RealmDirectoryCreateRelationListWithoutUnstableFrequency } from "../realmDirectory/createRelationListWithoutUnstableFrequency";
import { ReverseTransactionCreateRelationListWithoutUnstableFrequency } from "../reverseTransaction/createRelationListWithoutUnstableFrequency";
import { ReverseTransactionCreateRelationListWithoutUnstableFrequency2 } from "../reverseTransaction/createRelationListWithoutUnstableFrequency2";
import { SymphonyChartCreateRelationListWithoutUnstableFrequency } from "../symphonyChart/createRelationListWithoutUnstableFrequency";
import { ThresholdManifestCreateRelationListWithoutUnstableFrequency } from "../thresholdManifest/createRelationListWithoutUnstableFrequency";
import { TimeTravelLogCreateRelationListWithoutUnstableFrequency } from "../timeTravelLog/createRelationListWithoutUnstableFrequency";
import { UnfinishedSymphonyCreateRelationListWithoutUnstableFrequency } from "../unfinishedSymphony/createRelationListWithoutUnstableFrequency";
import { VortexReportCreateRelationListWithoutUnstableFrequency } from "../vortexReport/createRelationListWithoutUnstableFrequency";
import { WormholeRentalCreateRelationListWithoutUnstableFrequency } from "../wormholeRental/createRelationListWithoutUnstableFrequency";

export const UnstableFrequencyCreateWithoutImaginaryFriends2 = builder.inputRef<any>("UnstableFrequencyCreateWithoutImaginaryFriends2").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    artificialPotatoes: t.field({
      type: ArtificialPotatoCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    bananaQueues: t.field({
      type: BananaQueueCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    classifiedSillinesses: t.field({
      type: ClassifiedSillinessCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    cosmicDebrises: t.field({
      type: CosmicDebriCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    gravityOverrides: t.field({
      type: GravityOverrideCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    hypotheticalRevenuee: t.field({
      type: HypotheticalRevenueCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    imaginaryFriends: t.field({
      type: ImaginaryFriendCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    pendingDisasters: t.field({
      type: PendingDisasterCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    portalIndexes: t.field({
      type: PortalIndexCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    quantumInvoices: t.field({
      type: QuantumInvoiceCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    realmDirectories: t.field({
      type: RealmDirectoryCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    reverseTransaction: t.field({
      type: ReverseTransactionCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    reverseTransaction2: t.field({
      type: ReverseTransactionCreateRelationListWithoutUnstableFrequency2,
      required: false,
    }),
    symphonyCharts: t.field({
      type: SymphonyChartCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    thresholdManifests: t.field({
      type: ThresholdManifestCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    timeTravelLogs: t.field({
      type: TimeTravelLogCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    unfinishedSymphonies: t.field({
      type: UnfinishedSymphonyCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    vortexReports: t.field({
      type: VortexReportCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    wormholeRentals: t.field({
      type: WormholeRentalCreateRelationListWithoutUnstableFrequency,
      required: false,
    }),
  }),
});
