import { builder } from "src/builder";

import { HypotheticalRevenueCreate } from "./create";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationList = builder.inputRef<any>("HypotheticalRevenueUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
    set: t.field({ type: [HypotheticalRevenueWhereUnique] }),
    disconnect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
    create: t.field({ type: [HypotheticalRevenueCreate] }),
  }),
});
