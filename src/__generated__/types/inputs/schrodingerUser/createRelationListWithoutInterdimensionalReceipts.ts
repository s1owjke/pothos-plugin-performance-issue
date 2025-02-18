import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutInterdimensionalReceipts } from "./createWithoutInterdimensionalReceipts";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationListWithoutInterdimensionalReceipts = builder
  .inputRef<any>("SchrodingerUserCreateRelationListWithoutInterdimensionalReceipts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutInterdimensionalReceipts] }),
    }),
  });
