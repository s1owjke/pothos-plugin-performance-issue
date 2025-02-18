import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { DebuggingHistoryWhereRelationList } from "../debuggingHistory/whereRelationList";
import { DimensionalBackupWhere } from "../dimensionalBackup/where";
import { DoomedExperimentWhereRelationList } from "../doomedExperiment/whereRelationList";
import { EndlessLoopWhereRelationList } from "../endlessLoop/whereRelationList";
import { HyperlinkedUnicornWhereRelationList } from "../hyperlinkedUnicorn/whereRelationList";
import { IdFilter } from "../idFilter";
import { ImaginaryFriendWhere } from "../imaginaryFriend/where";
import { MissingContextWhereRelationList } from "../missingContext/whereRelationList";
import { OverdueRevolutionWhereRelationList } from "../overdueRevolution/whereRelationList";
import { PocketUniverseWhereRelationList } from "../pocketUniverse/whereRelationList";
import { RecursiveRecursionWhereRelationList } from "../recursiveRecursion/whereRelationList";
import { ReverseTransactionWhere } from "../reverseTransaction/where";
import { SchrodingerUserWhereRelationList } from "../schrodingerUser/whereRelationList";
import { SecretSauceWhereRelationList } from "../secretSauce/whereRelationList";
import { SentientMetadatumWhereRelationList } from "../sentientMetadatum/whereRelationList";
import { SpontaneousCombustionWhereRelationList } from "../spontaneousCombustion/whereRelationList";
import { ThresholdManifestWhere } from "../thresholdManifest/where";
import { UnassignedDestinyWhere } from "../unassignedDestiny/where";
import { UnderappreciatedCommentWhereRelationList } from "../underappreciatedComment/whereRelationList";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";

export const GravityOverrideWhere = builder.inputRef<any>("GravityOverrideWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    dimensionalBackup: t.field({ type: DimensionalBackupWhere, required: false }),
    dimensionalBackupId: t.field({ type: IdFilter, required: false }),
    debuggingHistories: t.field({ type: DebuggingHistoryWhereRelationList, required: false }),
    doomedExperiments: t.field({ type: DoomedExperimentWhereRelationList, required: false }),
    endlessLoops: t.field({ type: EndlessLoopWhereRelationList, required: false }),
    hyperlinkedUnicorns: t.field({ type: HyperlinkedUnicornWhereRelationList, required: false }),
    imaginaryFriend: t.field({ type: ImaginaryFriendWhere, required: false }),
    imaginaryFriendId: t.field({ type: IdFilter, required: false }),
    missingContexts: t.field({ type: MissingContextWhereRelationList, required: false }),
    overdueRevolutions: t.field({ type: OverdueRevolutionWhereRelationList, required: false }),
    pocketUniverses: t.field({ type: PocketUniverseWhereRelationList, required: false }),
    recursiveRecursions: t.field({ type: RecursiveRecursionWhereRelationList, required: false }),
    reverseTransaction: t.field({ type: ReverseTransactionWhere, required: false }),
    reverseTransactionId: t.field({ type: IdFilter, required: false }),
    schrodingerUsersToNotify: t.field({ type: SchrodingerUserWhereRelationList, required: false }),
    secretSauces: t.field({ type: SecretSauceWhereRelationList, required: false }),
    sentientMetadatas: t.field({ type: SentientMetadatumWhereRelationList, required: false }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionWhereRelationList,
      required: false,
    }),
    thresholdManifest: t.field({ type: ThresholdManifestWhere, required: false }),
    thresholdManifestId: t.field({ type: IdFilter, required: false }),
    unassignedDestiny: t.field({ type: UnassignedDestinyWhere, required: false }),
    unassignedDestinyId: t.field({ type: IdFilter, required: false }),
    underappreciatedComments: t.field({
      type: UnderappreciatedCommentWhereRelationList,
      required: false,
    }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [GravityOverrideWhere], required: false }),
    OR: t.field({ type: [GravityOverrideWhere], required: false }),
    NOT: t.field({ type: [GravityOverrideWhere], required: false }),
  }),
});
