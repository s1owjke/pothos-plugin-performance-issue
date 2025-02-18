import { builder } from "src/builder";

import { EmotionalSupportTableCreateRelationWithoutPendingDisasters } from "../emotionalSupportTable/createRelationWithoutPendingDisasters";
import { GlitchRegistryCreateRelationWithoutPendingDisasters } from "../glitchRegistry/createRelationWithoutPendingDisasters";
import { UnstableFrequencyCreateRelationWithoutPendingDisasters } from "../unstableFrequency/createRelationWithoutPendingDisasters";

export const PendingDisasterCreateWithoutThresholdManifest = builder.inputRef<any>("PendingDisasterCreateWithoutThresholdManifest").implement({
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
    unstableFrequency: t.field({
      type: UnstableFrequencyCreateRelationWithoutPendingDisasters,
      required: false,
    }),
  }),
});
