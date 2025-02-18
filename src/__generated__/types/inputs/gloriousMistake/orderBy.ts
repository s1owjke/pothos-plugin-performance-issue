import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { AlternativeFactOrderBy } from "../alternativeFact/orderBy";
import { ThresholdManifestOrderBy } from "../thresholdManifest/orderBy";

export const GloriousMistakeOrderBy = builder.inputRef<any>("GloriousMistakeOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    alternativeFact: t.field({ type: AlternativeFactOrderBy, required: false }),
    alternativeFactId: t.field({ type: SortOrder, required: false }),
    thresholdManifest: t.field({ type: ThresholdManifestOrderBy, required: false }),
    thresholdManifestId: t.field({ type: SortOrder, required: false }),
  }),
});
