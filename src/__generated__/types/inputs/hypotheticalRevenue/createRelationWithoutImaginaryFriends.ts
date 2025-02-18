import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutImaginaryFriends } from "./createWithoutImaginaryFriends";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationWithoutImaginaryFriends = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationWithoutImaginaryFriends")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutImaginaryFriends }),
    }),
  });
