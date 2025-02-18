import { builder } from "src/builder";

import { GlitchRegistryCreateRelationWithoutPendingDisasters } from "../glitchRegistry/createRelationWithoutPendingDisasters";
import { ThresholdManifestCreateRelationWithoutPendingDisasters } from "../thresholdManifest/createRelationWithoutPendingDisasters";
import { UnstableFrequencyCreateRelationWithoutPendingDisasters } from "../unstableFrequency/createRelationWithoutPendingDisasters";

export const PendingDisasterCreateWithoutEmotionalSupportTable = builder
  .inputRef<any>("PendingDisasterCreateWithoutEmotionalSupportTable")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
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
