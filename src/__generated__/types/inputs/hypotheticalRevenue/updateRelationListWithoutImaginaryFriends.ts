import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutImaginaryFriends } from "./createWithoutImaginaryFriends";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationListWithoutImaginaryFriends = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationListWithoutImaginaryFriends")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      set: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      disconnect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutImaginaryFriends] }),
    }),
  });
