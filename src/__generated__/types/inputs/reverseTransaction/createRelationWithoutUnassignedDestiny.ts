import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutUnassignedDestiny } from "./createWithoutUnassignedDestiny";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionCreateRelationWithoutUnassignedDestiny = builder
  .inputRef<any>("ReverseTransactionCreateRelationWithoutUnassignedDestiny")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ReverseTransactionWhereUnique }),
      create: t.field({ type: ReverseTransactionCreateWithoutUnassignedDestiny }),
    }),
  });
