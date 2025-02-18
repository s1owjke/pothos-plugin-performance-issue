import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutInterdimensionalReceipts } from "./createWithoutInterdimensionalReceipts";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationWithoutInterdimensionalReceipts = builder
  .inputRef<any>("SchrodingerUserCreateRelationWithoutInterdimensionalReceipts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutInterdimensionalReceipts }),
    }),
  });
