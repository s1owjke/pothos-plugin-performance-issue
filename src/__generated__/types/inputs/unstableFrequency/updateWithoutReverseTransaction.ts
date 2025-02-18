import { builder } from "src/builder";

import { ArtificialPotatoUpdateRelationListWithoutUnstableFrequency } from "../artificialPotato/updateRelationListWithoutUnstableFrequency";
import { BananaQueueUpdateRelationListWithoutUnstableFrequency } from "../bananaQueue/updateRelationListWithoutUnstableFrequency";
import { ClassifiedSillinessUpdateRelationListWithoutUnstableFrequency } from "../classifiedSilliness/updateRelationListWithoutUnstableFrequency";
import { CosmicDebriUpdateRelationListWithoutUnstableFrequency } from "../cosmicDebri/updateRelationListWithoutUnstableFrequency";
import { GravityOverrideUpdateRelationListWithoutUnstableFrequency } from "../gravityOverride/updateRelationListWithoutUnstableFrequency";
import { HypotheticalRevenueUpdateRelationListWithoutUnstableFrequency } from "../hypotheticalRevenue/updateRelationListWithoutUnstableFrequency";
import { ImaginaryFriendUpdateRelationListWithoutUnstableFrequency } from "../imaginaryFriend/updateRelationListWithoutUnstableFrequency";
import { ImaginaryFriendUpdateRelationListWithoutUnstableFrequency2 } from "../imaginaryFriend/updateRelationListWithoutUnstableFrequency2";
import { PendingDisasterUpdateRelationListWithoutUnstableFrequency } from "../pendingDisaster/updateRelationListWithoutUnstableFrequency";
import { PortalIndexUpdateRelationListWithoutUnstableFrequency } from "../portalIndex/updateRelationListWithoutUnstableFrequency";
import { QuantumInvoiceUpdateRelationListWithoutUnstableFrequency } from "../quantumInvoice/updateRelationListWithoutUnstableFrequency";
import { RealmDirectoryUpdateRelationListWithoutUnstableFrequency } from "../realmDirectory/updateRelationListWithoutUnstableFrequency";
import { ReverseTransactionUpdateRelationListWithoutUnstableFrequency2 } from "../reverseTransaction/updateRelationListWithoutUnstableFrequency2";
import { SymphonyChartUpdateRelationListWithoutUnstableFrequency } from "../symphonyChart/updateRelationListWithoutUnstableFrequency";
import { ThresholdManifestUpdateRelationListWithoutUnstableFrequency } from "../thresholdManifest/updateRelationListWithoutUnstableFrequency";
import { TimeTravelLogUpdateRelationListWithoutUnstableFrequency } from "../timeTravelLog/updateRelationListWithoutUnstableFrequency";
import { UnfinishedSymphonyUpdateRelationListWithoutUnstableFrequency } from "../unfinishedSymphony/updateRelationListWithoutUnstableFrequency";
import { VortexReportUpdateRelationListWithoutUnstableFrequency } from "../vortexReport/updateRelationListWithoutUnstableFrequency";
import { WormholeRentalUpdateRelationListWithoutUnstableFrequency } from "../wormholeRental/updateRelationListWithoutUnstableFrequency";

export const UnstableFrequencyUpdateWithoutReverseTransaction = builder.inputRef<any>("UnstableFrequencyUpdateWithoutReverseTransaction").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    artificialPotatoes: t.field({
      type: ArtificialPotatoUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    bananaQueues: t.field({
      type: BananaQueueUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    classifiedSillinesses: t.field({
      type: ClassifiedSillinessUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    cosmicDebrises: t.field({
      type: CosmicDebriUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    gravityOverrides: t.field({
      type: GravityOverrideUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    hypotheticalRevenuee: t.field({
      type: HypotheticalRevenueUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    imaginaryFriends: t.field({
      type: ImaginaryFriendUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    imaginaryFriends2: t.field({
      type: ImaginaryFriendUpdateRelationListWithoutUnstableFrequency2,
      required: false,
    }),
    pendingDisasters: t.field({
      type: PendingDisasterUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    portalIndexes: t.field({
      type: PortalIndexUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    quantumInvoices: t.field({
      type: QuantumInvoiceUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    realmDirectories: t.field({
      type: RealmDirectoryUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    reverseTransaction2: t.field({
      type: ReverseTransactionUpdateRelationListWithoutUnstableFrequency2,
      required: false,
    }),
    symphonyCharts: t.field({
      type: SymphonyChartUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    thresholdManifests: t.field({
      type: ThresholdManifestUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    timeTravelLogs: t.field({
      type: TimeTravelLogUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    unfinishedSymphonies: t.field({
      type: UnfinishedSymphonyUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    vortexReports: t.field({
      type: VortexReportUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
    wormholeRentals: t.field({
      type: WormholeRentalUpdateRelationListWithoutUnstableFrequency,
      required: false,
    }),
  }),
});
