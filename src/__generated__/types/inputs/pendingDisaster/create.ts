import { builder } from "src/builder";

import { EmotionalSupportTableCreateRelationWithoutPendingDisasters } from "../emotionalSupportTable/createRelationWithoutPendingDisasters";
import { GlitchRegistryCreateRelationWithoutPendingDisasters } from "../glitchRegistry/createRelationWithoutPendingDisasters";
import { ThresholdManifestCreateRelationWithoutPendingDisasters } from "../thresholdManifest/createRelationWithoutPendingDisasters";
import { UnstableFrequencyCreateRelationWithoutPendingDisasters } from "../unstableFrequency/createRelationWithoutPendingDisasters";

export const PendingDisasterCreate = builder.inputRef<any>("PendingDisasterCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    emotionalSupportTable: t.field({
      type: EmotionalSupportTableCreateRelationWithoutPendingDisasters,
      required: false,
    }),
    glitchRegistry: t.field({
      type: GlitchRegistryCreateRelationWithoutPendingDisasters,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutPendingDisasters,
      required: false,
    }),
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutPendingDisasters,
      required: false,
    }),
  }),
});
