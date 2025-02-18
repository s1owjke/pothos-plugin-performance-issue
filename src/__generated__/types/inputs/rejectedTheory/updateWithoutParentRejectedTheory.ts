import { builder } from "src/builder";

import { GhostRecordUpdateRelationWithoutRejectedTheories } from "../ghostRecord/updateRelationWithoutRejectedTheories";
import { PortalIndexUpdateRelationListWithoutRejectedTheories } from "../portalIndex/updateRelationListWithoutRejectedTheories";
import { RejectedTheoryUpdateRelationListWithoutChildRejectedTheories } from "../rejectedTheory/updateRelationListWithoutChildRejectedTheories";
import { ThresholdManifestUpdateRelationWithoutRejectedTheories } from "../thresholdManifest/updateRelationWithoutRejectedTheories";

export const RejectedTheoryUpdateWithoutParentRejectedTheory = builder.inputRef<any>("RejectedTheoryUpdateWithoutParentRejectedTheory").implement({
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
