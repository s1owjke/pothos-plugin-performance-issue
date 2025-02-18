import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutInterdimensionalReceipts } from "./createWithoutInterdimensionalReceipts";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationListWithoutInterdimensionalReceipts = builder
  .inputRef<any>("SchrodingerUserUpdateRelationListWithoutInterdimensionalReceipts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      set: t.field({ type: [SchrodingerUserWhereUnique] }),
      disconnect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutInterdimensionalReceipts] }),
    }),
  });
