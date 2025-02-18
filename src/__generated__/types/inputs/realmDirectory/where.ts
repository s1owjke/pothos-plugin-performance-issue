import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { HypotheticalRevenueWhere } from "../hypotheticalRevenue/where";
import { IdFilter } from "../idFilter";
import { ThresholdManifestWhere } from "../thresholdManifest/where";
import { UnstableFrequencyWhere } from "../unstableFrequency/where";
import { VortexReportWhere } from "../vortexReport/where";

export const RealmDirectoryWhere = builder.inputRef<any>("RealmDirectoryWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    hypotheticalRevenue: t.field({ type: HypotheticalRevenueWhere, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestWhere, required: false }),
    unstableFrequency: t.field({ type: UnstableFrequencyWhere, required: false }),
    unstableFrequencyId: t.field({ type: IdFilter, required: false }),
    vortexReport: t.field({ type: VortexReportWhere, required: false }),
    AND: t.field({ type: [RealmDirectoryWhere], required: false }),
    OR: t.field({ type: [RealmDirectoryWhere], required: false }),
    NOT: t.field({ type: [RealmDirectoryWhere], required: false }),
  }),
});
