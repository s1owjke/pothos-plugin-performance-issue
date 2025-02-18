import { builder } from "src/builder";

import { WormholeRentalWhere } from "./where";

export const WormholeRentalWhereRelationList = builder.inputRef<any>("WormholeRentalWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: WormholeRentalWhere, required: false }),
    every: t.field({ type: WormholeRentalWhere, required: false }),
    none: t.field({ type: WormholeRentalWhere, required: false }),
  }),
});
