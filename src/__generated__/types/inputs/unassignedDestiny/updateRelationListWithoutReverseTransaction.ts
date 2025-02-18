import { builder } from "src/builder";

import { UnassignedDestinyCreateWithoutReverseTransaction } from "./createWithoutReverseTransaction";
import { UnassignedDestinyWhereUnique } from "./whereUnique";

export const UnassignedDestinyUpdateRelationListWithoutReverseTransaction = builder
  .inputRef<any>("UnassignedDestinyUpdateRelationListWithoutReverseTransaction")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnassignedDestinyWhereUnique] }),
      set: t.field({ type: [UnassignedDestinyWhereUnique] }),
      disconnect: t.field({ type: [UnassignedDestinyWhereUnique] }),
      create: t.field({ type: [UnassignedDestinyCreateWithoutReverseTransaction] }),
    }),
  });
