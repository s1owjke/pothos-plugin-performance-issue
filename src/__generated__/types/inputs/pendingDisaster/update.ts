import { builder } from "src/builder";

import { EmotionalSupportTableUpdateRelationWithoutPendingDisasters } from "../emotionalSupportTable/updateRelationWithoutPendingDisasters";
import { GlitchRegistryUpdateRelationWithoutPendingDisasters } from "../glitchRegistry/updateRelationWithoutPendingDisasters";
import { ThresholdManifestUpdateRelationWithoutPendingDisasters } from "../thresholdManifest/updateRelationWithoutPendingDisasters";
import { UnstableFrequencyUpdateRelationWithoutPendingDisasters } from "../unstableFrequency/updateRelationWithoutPendingDisasters";

export const PendingDisasterUpdate = builder.inputRef<any>("PendingDisasterUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    emotionalSupportTable: t.field({
      type: EmotionalSupportTableUpdateRelationWithoutPendingDisasters,
      required: false,
    }),
    glitchRegistry: t.field({
      type: GlitchRegistryUpdateRelationWithoutPendingDisasters,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutPendingDisasters,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutPendingDisasters,
      required: false,
    }),
  }),
});
