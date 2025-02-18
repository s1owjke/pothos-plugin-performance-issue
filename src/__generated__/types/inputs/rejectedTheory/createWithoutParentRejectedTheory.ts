import { builder } from "src/builder";

import { GhostRecordCreateRelationWithoutRejectedTheories } from "../ghostRecord/createRelationWithoutRejectedTheories";
import { PortalIndexCreateRelationListWithoutRejectedTheories } from "../portalIndex/createRelationListWithoutRejectedTheories";
import { RejectedTheoryCreateRelationListWithoutChildRejectedTheories } from "../rejectedTheory/createRelationListWithoutChildRejectedTheories";
import { ThresholdManifestCreateRelationWithoutRejectedTheories } from "../thresholdManifest/createRelationWithoutRejectedTheories";

export const RejectedTheoryCreateWithoutParentRejectedTheory = builder.inputRef<any>("RejectedTheoryCreateWithoutParentRejectedTheory").implement({
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
    portalIndexes: t.field({
      type: PortalIndexCreateRelationListWithoutRejectedTheories,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutRejectedTheories,
      required: false,
    }),
  }),
});
