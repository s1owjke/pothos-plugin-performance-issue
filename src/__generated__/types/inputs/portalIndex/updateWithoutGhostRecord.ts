import { builder } from "src/builder";

import { ClassifiedSillinessUpdateRelationListWithoutPortalIndex } from "../classifiedSilliness/updateRelationListWithoutPortalIndex";
import { DimensionalBackupUpdateRelationListWithoutPortalIndexes } from "../dimensionalBackup/updateRelationListWithoutPortalIndexes";
import { MissingContextUpdateRelationListWithoutPortalIndex } from "../missingContext/updateRelationListWithoutPortalIndex";
import { RejectedTheoryUpdateRelationListWithoutPortalIndexes } from "../rejectedTheory/updateRelationListWithoutPortalIndexes";
import { TeleportationFailureUpdateRelationListWithoutPortalIndexes } from "../teleportationFailure/updateRelationListWithoutPortalIndexes";
import { UnstableFrequencyUpdateRelationWithoutPortalIndexes } from "../unstableFrequency/updateRelationWithoutPortalIndexes";

export const PortalIndexUpdateWithoutGhostRecord = builder.inputRef<any>("PortalIndexUpdateWithoutGhostRecord").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    classifiedSillinesses: t.field({
      type: ClassifiedSillinessUpdateRelationListWithoutPortalIndex,
      required: false,
    }),
    dimensionalBackups: t.field({
      type: DimensionalBackupUpdateRelationListWithoutPortalIndexes,
      required: false,
    }),
    missingContexts: t.field({
      type: MissingContextUpdateRelationListWithoutPortalIndex,
      required: false,
    }),
    rejectedTheories: t.field({
      type: RejectedTheoryUpdateRelationListWithoutPortalIndexes,
      required: false,
    }),
    teleportationFailures: t.field({
      type: TeleportationFailureUpdateRelationListWithoutPortalIndexes,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutPortalIndexes,
      required: false,
    }),
  }),
});
