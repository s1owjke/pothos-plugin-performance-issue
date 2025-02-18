import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutImaginaryFriends } from "./createWithoutImaginaryFriends";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationListWithoutImaginaryFriends = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationListWithoutImaginaryFriends")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutImaginaryFriends] }),
    }),
  });
