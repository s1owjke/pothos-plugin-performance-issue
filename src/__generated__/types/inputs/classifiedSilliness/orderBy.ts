import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { GhostRecordOrderBy } from "../ghostRecord/orderBy";
import { PortalIndexOrderBy } from "../portalIndex/orderBy";
import { SymphonyChartOrderBy } from "../symphonyChart/orderBy";
import { ThresholdManifestOrderBy } from "../thresholdManifest/orderBy";
import { UnstableFrequencyOrderBy } from "../unstableFrequency/orderBy";

export const ClassifiedSillinessOrderBy = builder.inputRef<any>("ClassifiedSillinessOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    ghostRecord: t.field({ type: GhostRecordOrderBy, required: false }),
    ghostRecordId: t.field({ type: SortOrder, required: false }),
    portalIndex: t.field({ type: PortalIndexOrderBy, required: false }),
    portalIndexId: t.field({ type: SortOrder, required: false }),
    symphonyChart: t.field({ type: SymphonyChartOrderBy, required: false }),
    symphonyChartId: t.field({ type: SortOrder, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestOrderBy, required: false }),
    thresholdManifestId: t.field({ type: SortOrder, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyOrderBy, required: false }),
    unstableFrequencyId: t.field({ type: SortOrder, required: false }),
  }),
});
