import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutInterdimensionalReceipts } from "./createWithoutInterdimensionalReceipts";
import { SchrodingerUserUpdateWithoutInterdimensionalReceipts } from "./updateWithoutInterdimensionalReceipts";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationWithoutInterdimensionalReceipts = builder
  .inputRef<any>("SchrodingerUserUpdateRelationWithoutInterdimensionalReceipts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      disconnect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutInterdimensionalReceipts }),
      update: t.field({ type: SchrodingerUserUpdateWithoutInterdimensionalReceipts }),
    }),
  });
