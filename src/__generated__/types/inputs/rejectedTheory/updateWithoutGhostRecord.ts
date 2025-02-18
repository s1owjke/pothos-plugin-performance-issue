import { builder } from "src/builder";

import { PortalIndexUpdateRelationListWithoutRejectedTheories } from "../portalIndex/updateRelationListWithoutRejectedTheories";
import { RejectedTheoryUpdateRelationListWithoutChildRejectedTheories } from "../rejectedTheory/updateRelationListWithoutChildRejectedTheories";
import { RejectedTheoryUpdateRelationWithoutChildRejectedTheories } from "../rejectedTheory/updateRelationWithoutChildRejectedTheories";
import { ThresholdManifestUpdateRelationWithoutRejectedTheories } from "../thresholdManifest/updateRelationWithoutRejectedTheories";

export const RejectedTheoryUpdateWithoutGhostRecord = builder.inputRef<any>("RejectedTheoryUpdateWithoutGhostRecord").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    childRejectedTheories: t.field({
      type: RejectedTheoryUpdateRelationListWithoutChildRejectedTheories,
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
