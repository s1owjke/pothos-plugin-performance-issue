import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutInfiniteUndo } from "./createWithoutInfiniteUndo";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationListWithoutInfiniteUndo = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationListWithoutInfiniteUndo")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      set: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      disconnect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutInfiniteUndo] }),
    }),
  });
