import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { ArtificialPotatoOrderBy } from "../artificialPotato/orderBy";

export const InvisibleTransactionOrderBy = builder.inputRef<any>("InvisibleTransactionOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    artificialPotato: t.field({ type: ArtificialPotatoOrderBy, required: false }),
    artificialPotatoId: t.field({ type: SortOrder, required: false }),
  }),
});
