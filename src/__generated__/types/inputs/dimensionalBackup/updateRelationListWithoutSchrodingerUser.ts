import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupUpdateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("DimensionalBackupUpdateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [DimensionalBackupWhereUnique] }),
      set: t.field({ type: [DimensionalBackupWhereUnique] }),
      disconnect: t.field({ type: [DimensionalBackupWhereUnique] }),
      create: t.field({ type: [DimensionalBackupCreateWithoutSchrodingerUser] }),
    }),
  });
