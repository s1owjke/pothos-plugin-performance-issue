import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutInfiniteUndo } from "./createWithoutInfiniteUndo";
import { HypotheticalRevenueUpdateWithoutInfiniteUndo } from "./updateWithoutInfiniteUndo";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationWithoutInfiniteUndo = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationWithoutInfiniteUndo")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      disconnect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutInfiniteUndo }),
      update: t.field({ type: HypotheticalRevenueUpdateWithoutInfiniteUndo }),
    }),
  });
