import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutImaginaryFriends } from "./createWithoutImaginaryFriends";
import { HypotheticalRevenueUpdateWithoutImaginaryFriends } from "./updateWithoutImaginaryFriends";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationWithoutImaginaryFriends = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationWithoutImaginaryFriends")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      disconnect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutImaginaryFriends }),
      update: t.field({ type: HypotheticalRevenueUpdateWithoutImaginaryFriends }),
    }),
  });
