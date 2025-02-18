import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionCreateRelationWithoutGravityOverrides = builder
  .inputRef<any>("ReverseTransactionCreateRelationWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ReverseTransactionWhereUnique }),
      create: t.field({ type: ReverseTransactionCreateWithoutGravityOverrides }),
    }),
  });
