import { builder } from "src/builder";

import { GhostRecordUpdateRelationWithoutRejectedTheories } from "../ghostRecord/updateRelationWithoutRejectedTheories";
import { RejectedTheoryUpdateRelationListWithoutChildRejectedTheories } from "../rejectedTheory/updateRelationListWithoutChildRejectedTheories";
import { RejectedTheoryUpdateRelationWithoutChildRejectedTheories } from "../rejectedTheory/updateRelationWithoutChildRejectedTheories";
import { ThresholdManifestUpdateRelationWithoutRejectedTheories } from "../thresholdManifest/updateRelationWithoutRejectedTheories";

export const RejectedTheoryUpdateWithoutPortalIndexes = builder.inputRef<any>("RejectedTheoryUpdateWithoutPortalIndexes").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    childRejectedTheories: t.field({
      type: RejectedTheoryUpdateRelationListWithoutChildRejectedTheories,
      required: false,
    }),
    ghostRecord: t.field({
      type: GhostRecordUpdateRelationWithoutRejectedTheories,
      required: false,
    }),
    parentRejectedTheory: t.field({
      type: RejectedTheoryUpdateRelationWithoutChildRejectedTheories,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutRejectedTheories,
      required: false,
    }),
  }),
});
