import { builder } from "src/builder";

import { EmotionalSupportTableCreateRelationWithoutPendingDisasters } from "../emotionalSupportTable/createRelationWithoutPendingDisasters";
import { GlitchRegistryCreateRelationWithoutPendingDisasters } from "../glitchRegistry/createRelationWithoutPendingDisasters";
import { ThresholdManifestCreateRelationWithoutPendingDisasters } from "../thresholdManifest/createRelationWithoutPendingDisasters";

export const PendingDisasterCreateWithoutUnstableFrequency = builder.inputRef<any>("PendingDisasterCreateWithoutUnstableFrequency").implement({
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
  }),
});
