import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { EmotionalSupportTableOrderBy } from "../emotionalSupportTable/orderBy";
import { GlitchRegistryOrderBy } from "../glitchRegistry/orderBy";
import { ThresholdManifestOrderBy } from "../thresholdManifest/orderBy";
import { UnstableFrequencyOrderBy } from "../unstableFrequency/orderBy";

export const PendingDisasterOrderBy = builder.inputRef<any>("PendingDisasterOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    emotionalSupportTable: t.field({ type: EmotionalSupportTableOrderBy, required: false }),
    emotionalSupportTableId: t.field({ type: SortOrder, required: false }),
    glitchRegistry: t.field({ type: GlitchRegistryOrderBy, required: false }),
    glitchRegistryId: t.field({ type: SortOrder, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestOrderBy, required: false }),
    thresholdManifestId: t.field({ type: SortOrder, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyOrderBy, required: false }),
    unstableFrequencyId: t.field({ type: SortOrder, required: false }),
  }),
});
