import { builder } from "src/builder";

import { DebuggingHistoryCreateRelationListWithoutGravityOverride } from "../debuggingHistory/createRelationListWithoutGravityOverride";
import { DimensionalBackupCreateRelationWithoutGravityOverrides } from "../dimensionalBackup/createRelationWithoutGravityOverrides";
import { DoomedExperimentCreateRelationListWithoutGravityOverride } from "../doomedExperiment/createRelationListWithoutGravityOverride";
import { EndlessLoopCreateRelationListWithoutGravityOverride } from "../endlessLoop/createRelationListWithoutGravityOverride";
import { HyperlinkedUnicornCreateRelationListWithoutGravityOverride } from "../hyperlinkedUnicorn/createRelationListWithoutGravityOverride";
import { ImaginaryFriendCreateRelationWithoutGravityOverrides } from "../imaginaryFriend/createRelationWithoutGravityOverrides";
import { MissingContextCreateRelationListWithoutGravityOverride } from "../missingContext/createRelationListWithoutGravityOverride";
import { PocketUniverseCreateRelationListWithoutGravityOverride } from "../pocketUniverse/createRelationListWithoutGravityOverride";
import { RecursiveRecursionCreateRelationListWithoutGravityOverride } from "../recursiveRecursion/createRelationListWithoutGravityOverride";
import { ReverseTransactionCreateRelationWithoutGravityOverrides } from "../reverseTransaction/createRelationWithoutGravityOverrides";
import { SchrodingerUserCreateRelationListWithoutGravityOverrides } from "../schrodingerUser/createRelationListWithoutGravityOverrides";
import { SecretSauceCreateRelationListWithoutGravityOverride } from "../secretSauce/createRelationListWithoutGravityOverride";
import { SentientMetadatumCreateRelationListWithoutGravityOverride } from "../sentientMetadatum/createRelationListWithoutGravityOverride";
import { SpontaneousCombustionCreateRelationListWithoutGravityOverride } from "../spontaneousCombustion/createRelationListWithoutGravityOverride";
import { ThresholdManifestCreateRelationWithoutGravityOverrides } from "../thresholdManifest/createRelationWithoutGravityOverrides";
import { UnassignedDestinyCreateRelationWithoutGravityOverride } from "../unassignedDestiny/createRelationWithoutGravityOverride";
import { UnderappreciatedCommentCreateRelationListWithoutGravityOverride } from "../underappreciatedComment/createRelationListWithoutGravityOverride";
import { UnstableFrequencyCreateRelationWithoutGravityOverrides } from "../unstableFrequency/createRelationWithoutGravityOverrides";

export const GravityOverrideCreateWithoutOverdueRevolutions = builder.inputRef<any>("GravityOverrideCreateWithoutOverdueRevolutions").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    dimensionalBackup: t.field({
      type: DimensionalBackupCreateRelationWithoutGravityOverrides,
      required: false,
    }),
    debuggingHistories: t.field({
      type: DebuggingHistoryCreateRelationListWithoutGravityOverride,
      required: false,
    }),
    doomedExperiments: t.field({
      type: DoomedExperimentCreateRelationListWithoutGravityOverride,
      required: false,
    }),
    endlessLoops: t.field({
      type: EndlessLoopCreateRelationListWithoutGravityOverride,
      required: false,
    }),
    hyperlinkedUnicorns: t.field({
      type: HyperlinkedUnicornCreateRelationListWithoutGravityOverride,
      required: false,
    }),
    imaginaryFriend: t.field({
      type: ImaginaryFriendCreateRelationWithoutGravityOverrides,
      required: false,
    }),
    missingContexts: t.field({
      type: MissingContextCreateRelationListWithoutGravityOverride,
      required: false,
    }),
    pocketUniverses: t.field({
      type: PocketUniverseCreateRelationListWithoutGravityOverride,
      required: false,
    }),
    recursiveRecursions: t.field({
      type: RecursiveRecursionCreateRelationListWithoutGravityOverride,
      required: false,
    }),
    reverseTransaction: t.field({
      type: ReverseTransactionCreateRelationWithoutGravityOverrides,
      required: false,
    }),
    schrodingerUsersToNotify: t.field({
      type: SchrodingerUserCreateRelationListWithoutGravityOverrides,
      required: false,
    }),
    secretSauces: t.field({
      type: SecretSauceCreateRelationListWithoutGravityOverride,
      required: false,
    }),
    sentientMetadatas: t.field({
      type: SentientMetadatumCreateRelationListWithoutGravityOverride,
      required: false,
    }),
    spontaneousCombustions: t.field({
      type: SpontaneousCombustionCreateRelationListWithoutGravityOverride,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutGravityOverrides,
      required: true,
    }),
    unassignedDestiny: t.field({
      type: UnassignedDestinyCreateRelationWithoutGravityOverride,
      required: false,
    }),
    underappreciatedComments: t.field({
      type: UnderappreciatedCommentCreateRelationListWithoutGravityOverride,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutGravityOverrides,
      required: false,
    }),
  }),
});
