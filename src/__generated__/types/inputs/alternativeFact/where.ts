import { builder } from "src/builder";

import { DateTimeFilter } from "../dateTimeFilter";
import { GlitchRegistryWhere } from "../glitchRegistry/where";
import { GloriousMistakeWhereRelationList } from "../gloriousMistake/whereRelationList";
import { IdFilter } from "../idFilter";
import { SingularityReportWhere } from "../singularityReport/where";
import { SymphonyChartWhere } from "../symphonyChart/where";

export const AlternativeFactWhere = builder.inputRef<any>("AlternativeFactWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    glitchRegistry: t.field({ type: GlitchRegistryWhere, required: false }),
    glitchRegistryId: t.field({ type: IdFilter, required: false }),
    gloriousMistakes: t.field({ type: GloriousMistakeWhereRelationList, required: false }),
    singularityReport: t.field({ type: SingularityReportWhere, required: false }),
    singularityReportId: t.field({ type: IdFilter, required: false }),
    symphonyChart: t.field({ type: SymphonyChartWhere, required: false }),
    symphonyChartId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [AlternativeFactWhere], required: false }),
    OR: t.field({ type: [AlternativeFactWhere], required: false }),
    NOT: t.field({ type: [AlternativeFactWhere], required: false }),
  }),
});
