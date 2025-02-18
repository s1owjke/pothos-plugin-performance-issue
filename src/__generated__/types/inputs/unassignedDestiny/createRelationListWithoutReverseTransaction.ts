import { builder } from "src/builder";

import { UnassignedDestinyCreateWithoutReverseTransaction } from "./createWithoutReverseTransaction";
import { UnassignedDestinyWhereUnique } from "./whereUnique";

export const UnassignedDestinyCreateRelationListWithoutReverseTransaction = builder
  .inputRef<any>("UnassignedDestinyCreateRelationListWithoutReverseTransaction")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnassignedDestinyWhereUnique] }),
      create: t.field({ type: [UnassignedDestinyCreateWithoutReverseTransaction] }),
    }),
  });
