import { builder } from "src/builder";

import { HypotheticalRevenueWhere } from "./where";

export const HypotheticalRevenueWhereRelationList = builder.inputRef<any>("HypotheticalRevenueWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: HypotheticalRevenueWhere, required: false }),
    every: t.field({ type: HypotheticalRevenueWhere, required: false }),
    none: t.field({ type: HypotheticalRevenueWhere, required: false }),
  }),
});
