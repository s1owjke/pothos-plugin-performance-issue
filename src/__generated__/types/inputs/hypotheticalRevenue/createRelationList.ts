import { builder } from "src/builder";

import { HypotheticalRevenueCreate } from "./create";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationList = builder.inputRef<any>("HypotheticalRevenueCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
    create: t.field({ type: [HypotheticalRevenueCreate] }),
  }),
});
