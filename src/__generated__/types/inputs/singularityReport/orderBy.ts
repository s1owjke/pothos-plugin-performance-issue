import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { AlternativeFactOrderBy } from "../alternativeFact/orderBy";
import { EmotionalSupportTableOrderBy } from "../emotionalSupportTable/orderBy";
import { GlitchRegistryOrderBy } from "../glitchRegistry/orderBy";

export const SingularityReportOrderBy = builder.inputRef<any>("SingularityReportOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    alternativeFact: t.field({ type: AlternativeFactOrderBy, required: false }),
    emotionalSupportTable: t.field({ type: EmotionalSupportTableOrderBy, required: false }),
    glitchRegistry: t.field({ type: GlitchRegistryOrderBy, required: false }),
  }),
});
