import { builder } from "src/builder";

import { GhostRecordCreateRelationWithoutRejectedTheories } from "../ghostRecord/createRelationWithoutRejectedTheories";
import { PortalIndexCreateRelationListWithoutRejectedTheories } from "../portalIndex/createRelationListWithoutRejectedTheories";
import { RejectedTheoryCreateRelationWithoutChildRejectedTheories } from "../rejectedTheory/createRelationWithoutChildRejectedTheories";
import { ThresholdManifestCreateRelationWithoutRejectedTheories } from "../thresholdManifest/createRelationWithoutRejectedTheories";

export const RejectedTheoryCreateWithoutChildRejectedTheories = builder.inputRef<any>("RejectedTheoryCreateWithoutChildRejectedTheories").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    ghostRecord: t.field({
      type: GhostRecordCreateRelationWithoutRejectedTheories,
      required: false,
    }),
    parentRejectedTheory: t.field({
      type: RejectedTheoryCreateRelationWithoutChildRejectedTheories,
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
