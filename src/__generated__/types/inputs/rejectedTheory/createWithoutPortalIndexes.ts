import { builder } from "src/builder";

import { GhostRecordCreateRelationWithoutRejectedTheories } from "../ghostRecord/createRelationWithoutRejectedTheories";
import { RejectedTheoryCreateRelationListWithoutChildRejectedTheories } from "../rejectedTheory/createRelationListWithoutChildRejectedTheories";
import { RejectedTheoryCreateRelationWithoutChildRejectedTheories } from "../rejectedTheory/createRelationWithoutChildRejectedTheories";
import { ThresholdManifestCreateRelationWithoutRejectedTheories } from "../thresholdManifest/createRelationWithoutRejectedTheories";

export const RejectedTheoryCreateWithoutPortalIndexes = builder.inputRef<any>("RejectedTheoryCreateWithoutPortalIndexes").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    childRejectedTheories: t.field({
      type: RejectedTheoryCreateRelationListWithoutChildRejectedTheories,
      required: false,
    }),
    ghostRecord: t.field({
      type: GhostRecordCreateRelationWithoutRejectedTheories,
      required: false,
    }),
    parentRejectedTheory: t.field({
      type: RejectedTheoryCreateRelationWithoutChildRejectedTheories,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutRejectedTheories,
      required: false,
    }),
  }),
});
