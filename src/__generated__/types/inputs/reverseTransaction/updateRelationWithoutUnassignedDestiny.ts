import { builder } from "src/builder";

import { ReverseTransactionCreateWithoutUnassignedDestiny } from "./createWithoutUnassignedDestiny";
import { ReverseTransactionUpdateWithoutUnassignedDestiny } from "./updateWithoutUnassignedDestiny";
import { ReverseTransactionWhereUnique } from "./whereUnique";

export const ReverseTransactionUpdateRelationWithoutUnassignedDestiny = builder
  .inputRef<any>("ReverseTransactionUpdateRelationWithoutUnassignedDestiny")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ReverseTransactionWhereUnique }),
      disconnect: t.field({ type: ReverseTransactionWhereUnique }),
      create: t.field({ type: ReverseTransactionCreateWithoutUnassignedDestiny }),
      update: t.field({ type: ReverseTransactionUpdateWithoutUnassignedDestiny }),
    }),
  });
