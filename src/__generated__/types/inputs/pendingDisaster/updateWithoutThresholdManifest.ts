import { builder } from "src/builder";

import { EmotionalSupportTableUpdateRelationWithoutPendingDisasters } from "../emotionalSupportTable/updateRelationWithoutPendingDisasters";
import { GlitchRegistryUpdateRelationWithoutPendingDisasters } from "../glitchRegistry/updateRelationWithoutPendingDisasters";
import { UnstableFrequencyUpdateRelationWithoutPendingDisasters } from "../unstableFrequency/updateRelationWithoutPendingDisasters";

export const PendingDisasterUpdateWithoutThresholdManifest = builder.inputRef<any>("PendingDisasterUpdateWithoutThresholdManifest").implement({
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
    unstableFrequency: t.field({
      type: UnstableFrequencyUpdateRelationWithoutPendingDisasters,
      required: false,
    }),
  }),
});
