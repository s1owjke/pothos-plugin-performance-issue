import { builder } from "src/builder";

import { EmotionalSupportTableUpdateRelationWithoutPendingDisasters } from "../emotionalSupportTable/updateRelationWithoutPendingDisasters";
import { ThresholdManifestUpdateRelationWithoutPendingDisasters } from "../thresholdManifest/updateRelationWithoutPendingDisasters";
import { UnstableFrequencyUpdateRelationWithoutPendingDisasters } from "../unstableFrequency/updateRelationWithoutPendingDisasters";

export const PendingDisasterUpdateWithoutGlitchRegistry = builder.inputRef<any>("PendingDisasterUpdateWithoutGlitchRegistry").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    emotionalSupportTable: t.field({
      type: EmotionalSupportTableUpdateRelationWithoutPendingDisasters,
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
