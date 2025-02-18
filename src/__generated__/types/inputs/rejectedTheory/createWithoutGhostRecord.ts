import { builder } from "src/builder";

import { PortalIndexCreateRelationListWithoutRejectedTheories } from "../portalIndex/createRelationListWithoutRejectedTheories";
import { RejectedTheoryCreateRelationListWithoutChildRejectedTheories } from "../rejectedTheory/createRelationListWithoutChildRejectedTheories";
import { RejectedTheoryCreateRelationWithoutChildRejectedTheories } from "../rejectedTheory/createRelationWithoutChildRejectedTheories";
import { ThresholdManifestCreateRelationWithoutRejectedTheories } from "../thresholdManifest/createRelationWithoutRejectedTheories";

export const RejectedTheoryCreateWithoutGhostRecord = builder.inputRef<any>("RejectedTheoryCreateWithoutGhostRecord").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    childRejectedTheories: t.field({
      type: RejectedTheoryCreateRelationListWithoutChildRejectedTheories,
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
