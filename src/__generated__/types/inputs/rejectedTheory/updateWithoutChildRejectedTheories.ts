import { builder } from "src/builder";

import { GhostRecordUpdateRelationWithoutRejectedTheories } from "../ghostRecord/updateRelationWithoutRejectedTheories";
import { PortalIndexUpdateRelationListWithoutRejectedTheories } from "../portalIndex/updateRelationListWithoutRejectedTheories";
import { RejectedTheoryUpdateRelationWithoutChildRejectedTheories } from "../rejectedTheory/updateRelationWithoutChildRejectedTheories";
import { ThresholdManifestUpdateRelationWithoutRejectedTheories } from "../thresholdManifest/updateRelationWithoutRejectedTheories";

export const RejectedTheoryUpdateWithoutChildRejectedTheories = builder.inputRef<any>("RejectedTheoryUpdateWithoutChildRejectedTheories").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    ghostRecord: t.field({
      type: GhostRecordUpdateRelationWithoutRejectedTheories,
      required: false,
    }),
    parentRejectedTheory: t.field({
      type: RejectedTheoryUpdateRelationWithoutChildRejectedTheories,
      required: false,
    }),
    portalIndexes: t.field({
      type: PortalIndexUpdateRelationListWithoutRejectedTheories,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutRejectedTheories,
      required: false,
    }),
  }),
});
