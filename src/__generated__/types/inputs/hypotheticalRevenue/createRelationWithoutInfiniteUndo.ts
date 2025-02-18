import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutInfiniteUndo } from "./createWithoutInfiniteUndo";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationWithoutInfiniteUndo = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationWithoutInfiniteUndo")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutInfiniteUndo }),
    }),
  });
