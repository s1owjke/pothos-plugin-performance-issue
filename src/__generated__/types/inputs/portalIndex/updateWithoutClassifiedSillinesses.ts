import { builder } from "src/builder";

import { DimensionalBackupUpdateRelationListWithoutPortalIndexes } from "../dimensionalBackup/updateRelationListWithoutPortalIndexes";
import { GhostRecordUpdateRelationWithoutPortalIndex } from "../ghostRecord/updateRelationWithoutPortalIndex";
import { MissingContextUpdateRelationListWithoutPortalIndex } from "../missingContext/updateRelationListWithoutPortalIndex";
import { RejectedTheoryUpdateRelationListWithoutPortalIndexes } from "../rejectedTheory/updateRelationListWithoutPortalIndexes";
import { TeleportationFailureUpdateRelationListWithoutPortalIndexes } from "../teleportationFailure/updateRelationListWithoutPortalIndexes";
import { UnstableFrequencyUpdateRelationWithoutPortalIndexes } from "../unstableFrequency/updateRelationWithoutPortalIndexes";

export const PortalIndexUpdateWithoutClassifiedSillinesses = builder.inputRef<any>("PortalIndexUpdateWithoutClassifiedSillinesses").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    dimensionalBackups: t.field({
      type: DimensionalBackupUpdateRelationListWithoutPortalIndexes,
      required: false,
    }),
    ghostRecord: t.field({ type: GhostRecordUpdateRelationWithoutPortalIndex, required: false }),
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
