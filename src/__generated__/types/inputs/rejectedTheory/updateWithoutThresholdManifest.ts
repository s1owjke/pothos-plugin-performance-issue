import { builder } from "src/builder";

import { GhostRecordUpdateRelationWithoutRejectedTheories } from "../ghostRecord/updateRelationWithoutRejectedTheories";
import { PortalIndexUpdateRelationListWithoutRejectedTheories } from "../portalIndex/updateRelationListWithoutRejectedTheories";
import { RejectedTheoryUpdateRelationListWithoutChildRejectedTheories } from "../rejectedTheory/updateRelationListWithoutChildRejectedTheories";
import { RejectedTheoryUpdateRelationWithoutChildRejectedTheories } from "../rejectedTheory/updateRelationWithoutChildRejectedTheories";

export const RejectedTheoryUpdateWithoutThresholdManifest = builder.inputRef<any>("RejectedTheoryUpdateWithoutThresholdManifest").implement({
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
    portalIndexes: t.field({
      type: PortalIndexUpdateRelationListWithoutRejectedTheories,
      required: false,
    }),
  }),
});
