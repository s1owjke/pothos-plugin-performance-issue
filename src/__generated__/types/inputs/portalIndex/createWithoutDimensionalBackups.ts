import { builder } from "src/builder";

import { ClassifiedSillinessCreateRelationListWithoutPortalIndex } from "../classifiedSilliness/createRelationListWithoutPortalIndex";
import { GhostRecordCreateRelationWithoutPortalIndex } from "../ghostRecord/createRelationWithoutPortalIndex";
import { MissingContextCreateRelationListWithoutPortalIndex } from "../missingContext/createRelationListWithoutPortalIndex";
import { RejectedTheoryCreateRelationListWithoutPortalIndexes } from "../rejectedTheory/createRelationListWithoutPortalIndexes";
import { TeleportationFailureCreateRelationListWithoutPortalIndexes } from "../teleportationFailure/createRelationListWithoutPortalIndexes";
import { UnstableFrequencyCreateRelationWithoutPortalIndexes } from "../unstableFrequency/createRelationWithoutPortalIndexes";

export const PortalIndexCreateWithoutDimensionalBackups = builder.inputRef<any>("PortalIndexCreateWithoutDimensionalBackups").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    classifiedSillinesses: t.field({
      type: ClassifiedSillinessCreateRelationListWithoutPortalIndex,
      required: false,
    }),
    ghostRecord: t.field({ type: GhostRecordCreateRelationWithoutPortalIndex, required: false }),
    missingContexts: t.field({
      type: MissingContextCreateRelationListWithoutPortalIndex,
      required: false,
    }),
    rejectedTheories: t.field({
      type: RejectedTheoryCreateRelationListWithoutPortalIndexes,
      required: false,
    }),
    teleportationFailures: t.field({
      type: TeleportationFailureCreateRelationListWithoutPortalIndexes,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutPortalIndexes,
      required: false,
    }),
  }),
});
