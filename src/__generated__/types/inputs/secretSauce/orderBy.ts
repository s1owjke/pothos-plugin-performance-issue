import { builder } from "src/builder";

import { SortOrder } from "../../../enums/sortOrder";
import { GravityOverrideOrderBy } from "../gravityOverride/orderBy";

export const SecretSauceOrderBy = builder.inputRef<any>("SecretSauceOrderBy").implement({
  fields: (t) => ({
    id: t.field({ type: SortOrder, required: false }),
    createdAt: t.field({ type: SortOrder, required: false }),
    updatedAt: t.field({ type: SortOrder, required: false }),
    gravityOverride: t.field({ type: GravityOverrideOrderBy, required: false }),
    gravityOverrideId: t.field({ type: SortOrder, required: false }),
  }),
});
