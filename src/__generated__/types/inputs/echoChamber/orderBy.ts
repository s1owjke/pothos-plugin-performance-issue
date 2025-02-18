import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { ArtificialPotatoOrderBy } from "../artificialPotato/orderBy";
import { SchrodingerUserOrderBy } from "../schrodingerUser/orderBy";

export const EchoChamberOrderBy = builder.inputRef<any>("EchoChamberOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    artificialPotatoId: t.field({ type: SortOrder, required: false }),
    schrodingerUser: t.field({ type: SchrodingerUserOrderBy, required: false }),
    schrodingerUserId: t.field({ type: SortOrder, required: false }),
    verifier: t.field({ type: ArtificialPotatoOrderBy, required: false }),
  }),
});
