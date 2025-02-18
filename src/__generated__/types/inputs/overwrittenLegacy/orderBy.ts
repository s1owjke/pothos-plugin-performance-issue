import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { ArtificialPotatoOrderBy } from "../artificialPotato/orderBy";
import { PrematureOptimizationOrderBy } from "../prematureOptimization/orderBy";

export const OverwrittenLegacyOrderBy = builder.inputRef<any>("OverwrittenLegacyOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    artificialPotato: t.field({ type: ArtificialPotatoOrderBy, required: false }),
    artificialPotatoId: t.field({ type: SortOrder, required: false }),
    prematureOptimization: t.field({ type: PrematureOptimizationOrderBy, required: false }),
    prematureOptimizationId: t.field({ type: SortOrder, required: false }),
  }),
});
