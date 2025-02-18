import { builder } from "src/builder";

import { GhostRecordCreateRelationWithoutRejectedTheories } from "../ghostRecord/createRelationWithoutRejectedTheories";
import { PortalIndexCreateRelationListWithoutRejectedTheories } from "../portalIndex/createRelationListWithoutRejectedTheories";
import { RejectedTheoryCreateRelationListWithoutChildRejectedTheories } from "../rejectedTheory/createRelationListWithoutChildRejectedTheories";
import { RejectedTheoryCreateRelationWithoutChildRejectedTheories } from "../rejectedTheory/createRelationWithoutChildRejectedTheories";

export const RejectedTheoryCreateWithoutThresholdManifest = builder.inputRef<any>("RejectedTheoryCreateWithoutThresholdManifest").implement({
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
    portalIndexes: t.field({
      type: PortalIndexCreateRelationListWithoutRejectedTheories,
      required: false,
    }),
  }),
});
