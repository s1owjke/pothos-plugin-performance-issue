import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutInfiniteUndo } from "./createWithoutInfiniteUndo";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationListWithoutInfiniteUndo = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationListWithoutInfiniteUndo")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutInfiniteUndo] }),
    }),
  });
