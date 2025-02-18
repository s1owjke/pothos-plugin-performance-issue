import { builder } from "src/builder";

import { UnassignedDestinyCreateWithoutReverseTransaction } from "./createWithoutReverseTransaction";
import { UnassignedDestinyUpdateWithoutReverseTransaction } from "./updateWithoutReverseTransaction";
import { UnassignedDestinyWhereUnique } from "./whereUnique";

export const UnassignedDestinyUpdateRelationWithoutReverseTransaction = builder
  .inputRef<any>("UnassignedDestinyUpdateRelationWithoutReverseTransaction")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnassignedDestinyWhereUnique }),
      disconnect: t.field({ type: UnassignedDestinyWhereUnique }),
      create: t.field({ type: UnassignedDestinyCreateWithoutReverseTransaction }),
      update: t.field({ type: UnassignedDestinyUpdateWithoutReverseTransaction }),
    }),
  });
