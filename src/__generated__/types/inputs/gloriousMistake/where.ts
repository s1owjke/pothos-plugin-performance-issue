import { builder } from "src/builder";

import { AlternativeFactWhere } from "../alternativeFact/where";
import { DateTimeFilter } from "../dateTimeFilter";
import { IdFilter } from "../idFilter";
import { ThresholdManifestWhere } from "../thresholdManifest/where";

export const GloriousMistakeWhere = builder.inputRef<any>("GloriousMistakeWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    alternativeFact: t.field({ type: AlternativeFactWhere, required: false }),
    alternativeFactId: t.field({ type: IdFilter, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestWhere, required: false }),
    thresholdManifestId: t.field({ type: IdFilter, required: false }),
    AND: t.field({ type: [GloriousMistakeWhere], required: false }),
    OR: t.field({ type: [GloriousMistakeWhere], required: false }),
    NOT: t.field({ type: [GloriousMistakeWhere], required: false }),
  }),
});
