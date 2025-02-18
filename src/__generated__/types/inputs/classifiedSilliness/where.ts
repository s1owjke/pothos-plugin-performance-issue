import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GhostRecordWhere } from "../ghostRecord/where";
import { IdFilter } from "../idFilter";
import { PortalIndexWhere } from "../portalIndex/where";
import { SymphonyChartWhere } from "../symphonyChart/where";
import { ThresholdManifestWhere } from "../thresholdManifest/where";
import { UnfinishedPrototypeWhereRelationList } from "../unfinishedPrototype/whereRelationList";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";

export const ClassifiedSillinessWhere = builder.inputRef<any>("ClassifiedSillinessWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    ghostRecord: t.field({ type: GhostRecordWhere, required: false }),
    ghostRecordId: t.field({ type: IdFilter, required: false }),
    portalIndex: t.field({ type: PortalIndexWhere, required: false }),
    portalIndexId: t.field({ type: IdFilter, required: false }),
    symphonyChart: t.field({ type: SymphonyChartWhere, required: false }),
    symphonyChartId: t.field({ type: IdFilter, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestWhere, required: false }),
    thresholdManifestId: t.field({ type: IdFilter, required: false }),
    unfinishedPrototypes: t.field({
      type: UnfinishedPrototypeWhereRelationList,
      required: false,
    }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [ClassifiedSillinessWhere], required: false }),
    OR: t.field({ type: [ClassifiedSillinessWhere], required: false }),
    NOT: t.field({ type: [ClassifiedSillinessWhere], required: false }),
  }),
});
