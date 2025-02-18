import { builder } from "src/builder";

import { HypotheticalRevenueCreate } from "./create";
import { HypotheticalRevenueUpdate } from "./update";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelation = builder.inputRef<any>("HypotheticalRevenueUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: HypotheticalRevenueWhereUnique }),
    disconnect: t.field({ type: HypotheticalRevenueWhereUnique }),
    create: t.field({ type: HypotheticalRevenueCreate }),
    update: t.field({ type: HypotheticalRevenueUpdate }),
  }),
});
