import { builder } from "src/builder";

import { ArtificialPotatoWhereRelationList } from "../artificialPotato/whereRelationList";
import { BananaQueueWhereRelationList } from "../bananaQueue/whereRelationList";
import { ClassifiedSillinessWhereRelationList } from "../classifiedSilliness/whereRelationList";
import { CosmicDebriWhereRelationList } from "../cosmicDebri/whereRelationList";
import { DateTimeFilter } from "../dateTimeFilter";
import { GravityOverrideWhereRelationList } from "../gravityOverride/whereRelationList";
import { HypotheticalRevenueWhereRelationList } from "../hypotheticalRevenue/whereRelationList";
import { IdFilter } from "../idFilter";
import { ImaginaryFriendWhereRelationList } from "../imaginaryFriend/whereRelationList";
import { PendingDisasterWhereRelationList } from "../pendingDisaster/whereRelationList";
import { PortalIndexWhereRelationList } from "../portalIndex/whereRelationList";
import { QuantumInvoiceWhereRelationList } from "../quantumInvoice/whereRelationList";
import { RealmDirectoryWhereRelationList } from "../realmDirectory/whereRelationList";
import { ReverseTransactionWhereRelationList } from "../reverseTransaction/whereRelationList";
import { SymphonyChartWhereRelationList } from "../symphonyChart/whereRelationList";
import { ThresholdManifestWhereRelationList } from "../thresholdManifest/whereRelationList";
import { TimeTravelLogWhereRelationList } from "../timeTravelLog/whereRelationList";
import { UnfinishedSymphonyWhereRelationList } from "../unfinishedSymphony/whereRelationList";
import { VortexReportWhereRelationList } from "../vortexReport/whereRelationList";
import { WormholeRentalWhereRelationList } from "../wormholeRental/whereRelationList";

export const UnstableFrequencyWhere = builder.inputRef<any>("UnstableFrequencyWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    artificialPotatoes: t.field({ type: ArtificialPotatoWhereRelationList, required: false }),
    bananaQueues: t.field({ type: BananaQueueWhereRelationList, required: false }),
    classifiedSillinesses: t.field({ type: ClassifiedSillinessWhereRelationList, required: false }),
    cosmicDebrises: t.field({ type: CosmicDebriWhereRelationList, required: false }),
    gravityOverrides: t.field({ type: GravityOverrideWhereRelationList, required: false }),
    hypotheticalRevenuee: t.field({ type: HypotheticalRevenueWhereRelationList, required: false }),
    imaginaryFriends: t.field({ type: ImaginaryFriendWhereRelationList, required: false }),
    imaginaryFriends2: t.field({ type: ImaginaryFriendWhereRelationList, required: false }),
    pendingDisasters: t.field({ type: PendingDisasterWhereRelationList, required: false }),
    portalIndexes: t.field({ type: PortalIndexWhereRelationList, required: false }),
    quantumInvoices: t.field({ type: QuantumInvoiceWhereRelationList, required: false }),
    realmDirectories: t.field({ type: RealmDirectoryWhereRelationList, required: false }),
    reverseTransaction: t.field({ type: ReverseTransactionWhereRelationList, required: false }),
    reverseTransaction2: t.field({ type: ReverseTransactionWhereRelationList, required: false }),
    symphonyCharts: t.field({ type: SymphonyChartWhereRelationList, required: false }),
    thresholdManifests: t.field({ type: ThresholdManifestWhereRelationList, required: false }),
    timeTravelLogs: t.field({ type: TimeTravelLogWhereRelationList, required: false }),
    unfinishedSymphonies: t.field({ type: UnfinishedSymphonyWhereRelationList, required: false }),
    vortexReports: t.field({ type: VortexReportWhereRelationList, required: false }),
    wormholeRentals: t.field({ type: WormholeRentalWhereRelationList, required: false }),
    AND: t.field({ type: [UnstableFrequencyWhere], required: false }),
    OR: t.field({ type: [UnstableFrequencyWhere], required: false }),
    NOT: t.field({ type: [UnstableFrequencyWhere], required: false }),
  }),
});
