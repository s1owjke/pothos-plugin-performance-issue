import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { EmotionalSupportTableWhere } from "../emotionalSupportTable/where";
import { GlitchRegistryWhere } from "../glitchRegistry/where";
import { IdFilter } from "../idFilter";
import { ThresholdManifestWhere } from "../thresholdManifest/where";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";

export const PendingDisasterWhere = builder.inputRef<any>("PendingDisasterWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    emotionalSupportTable: t.field({ type: EmotionalSupportTableWhere, required: false }),
    emotionalSupportTableId: t.field({ type: IdFilter, required: false }),
    glitchRegistry: t.field({ type: GlitchRegistryWhere, required: false }),
    glitchRegistryId: t.field({ type: IdFilter, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestWhere, required: false }),
    thresholdManifestId: t.field({ type: IdFilter, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [PendingDisasterWhere], required: false }),
    OR: t.field({ type: [PendingDisasterWhere], required: false }),
    NOT: t.field({ type: [PendingDisasterWhere], required: false }),
  }),
});
