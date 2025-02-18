import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { ReverseTransactionUpdateWithoutGravityOverrides } from "./updateWithoutGravityOverrides";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationWithoutGravityOverrides = builder
  .inputRef<any>("ReverseTransactionUpdateRelationWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ReverseTransactionWhereUnique }),
      disconnect: t.field({ type: ReverseTransactionWhereUnique }),
      create: t.field({ type: ReverseTransactionCreateWithoutGravityOverrides }),
      update: t.field({ type: ReverseTransactionUpdateWithoutGravityOverrides }),
    }),
  });
