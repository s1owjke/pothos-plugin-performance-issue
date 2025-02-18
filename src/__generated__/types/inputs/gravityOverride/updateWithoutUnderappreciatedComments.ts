import { builder } from "src/builder";

import { DebuggingHistoryUpdateRelationListWithoutGravityOverride } from "../debuggingHistory/updateRelationListWithoutGravityOverride";
import { DimensionalBackupUpdateRelationWithoutGravityOverrides } from "../dimensionalBackup/updateRelationWithoutGravityOverrides";
import { DoomedExperimentUpdateRelationListWithoutGravityOverride } from "../doomedExperiment/updateRelationListWithoutGravityOverride";
import { EndlessLoopUpdateRelationListWithoutGravityOverride } from "../endlessLoop/updateRelationListWithoutGravityOverride";
import { HyperlinkedUnicornUpdateRelationListWithoutGravityOverride } from "../hyperlinkedUnicorn/updateRelationListWithoutGravityOverride";
import { ImaginaryFriendUpdateRelationWithoutGravityOverrides } from "../imaginaryFriend/updateRelationWithoutGravityOverrides";
import { MissingContextUpdateRelationListWithoutGravityOverride } from "../missingContext/updateRelationListWithoutGravityOverride";
import { OverdueRevolutionUpdateRelationListWithoutGravityOverride } from "../overdueRevolution/updateRelationListWithoutGravityOverride";
import { PocketUniverseUpdateRelationListWithoutGravityOverride } from "../pocketUniverse/updateRelationListWithoutGravityOverride";
import { RecursiveRecursionUpdateRelationListWithoutGravityOverride } from "../recursiveRecursion/updateRelationListWithoutGravityOverride";
import { ReverseTransactionUpdateRelationWithoutGravityOverrides } from "../reverseTransaction/updateRelationWithoutGravityOverrides";
import { SchrodingerUserUpdateRelationListWithoutGravityOverrides } from "../schrodingerUser/updateRelationListWithoutGravityOverrides";
import { SecretSauceUpdateRelationListWithoutGravityOverride } from "../secretSauce/updateRelationListWithoutGravityOverride";
import { SentientMetadatumUpdateRelationListWithoutGravityOverride } from "../sentientMetadatum/updateRelationListWithoutGravityOverride";
import { SpontaneousCombustionUpdateRelationListWithoutGravityOverride } from "../spontaneousCombustion/updateRelationListWithoutGravityOverride";
import { ThresholdManifestUpdateRelationWithoutGravityOverrides } from "../thresholdManifest/updateRelationWithoutGravityOverrides";
import { UnassignedDestinyUpdateRelationWithoutGravityOverride } from "../unassignedDestiny/updateRelationWithoutGravityOverride";
import { UnstableFrequencyUpdateRelationWithoutGravityOverrides } from "../unstableFrequency/updateRelationWithoutGravityOverrides";

export const GravityOverrideUpdateWithoutUnderappreciatedComments = builder
  .inputRef<any>("GravityOverrideUpdateWithoutUnderappreciatedComments")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      dimensionalBackup: t.field({
        type: DimensionalBackupUpdateRelationWithoutGravityOverrides,
        required: false,
      }),
      debuggingHistories: t.field({
        type: DebuggingHistoryUpdateRelationListWithoutGravityOverride,
        required: false,
      }),
      doomedExperiments: t.field({
        type: DoomedExperimentUpdateRelationListWithoutGravityOverride,
        required: false,
      }),
      endlessLoops: t.field({
        type: EndlessLoopUpdateRelationListWithoutGravityOverride,
        required: false,
      }),
      hyperlinkedUnicorns: t.field({
        type: HyperlinkedUnicornUpdateRelationListWithoutGravityOverride,
        required: false,
      }),
      imaginaryFriend: t.field({
        type: ImaginaryFriendUpdateRelationWithoutGravityOverrides,
        required: false,
      }),
      missingContexts: t.field({
        type: MissingContextUpdateRelationListWithoutGravityOverride,
        required: false,
      }),
      overdueRevolutions: t.field({
        type: OverdueRevolutionUpdateRelationListWithoutGravityOverride,
        required: false,
      }),
      pocketUniverses: t.field({
        type: PocketUniverseUpdateRelationListWithoutGravityOverride,
        required: false,
      }),
      recursiveRecursions: t.field({
        type: RecursiveRecursionUpdateRelationListWithoutGravityOverride,
        required: false,
      }),
      reverseTransaction: t.field({
        type: ReverseTransactionUpdateRelationWithoutGravityOverrides,
        required: false,
      }),
      schrodingerUsersToNotify: t.field({
        type: SchrodingerUserUpdateRelationListWithoutGravityOverrides,
        required: false,
      }),
      secretSauces: t.field({
        type: SecretSauceUpdateRelationListWithoutGravityOverride,
        required: false,
      }),
      sentientMetadatas: t.field({
        type: SentientMetadatumUpdateRelationListWithoutGravityOverride,
        required: false,
      }),
      spontaneousCombustions: t.field({
        type: SpontaneousCombustionUpdateRelationListWithoutGravityOverride,
        required: false,
      }),
      thresholdManifest: t.field({
        type: ThresholdManifestUpdateRelationWithoutGravityOverrides,
        required: false,
      }),
      unassignedDestiny: t.field({
        type: UnassignedDestinyUpdateRelationWithoutGravityOverride,
        required: false,
      }),
      unstableFrequency: t.field({
        type: UnstableFrequencyUpdateRelationWithoutGravityOverrides,
        required: false,
      }),
    }),
  });
