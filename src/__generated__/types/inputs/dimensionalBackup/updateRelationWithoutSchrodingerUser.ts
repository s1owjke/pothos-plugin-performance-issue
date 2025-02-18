import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { DimensionalBackupUpdateWithoutSchrodingerUser } from "./updateWithoutSchrodingerUser";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupUpdateRelationWithoutSchrodingerUser = builder
  .inputRef<any>("DimensionalBackupUpdateRelationWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: DimensionalBackupWhereUnique }),
      disconnect: t.field({ type: DimensionalBackupWhereUnique }),
      create: t.field({ type: DimensionalBackupCreateWithoutSchrodingerUser }),
      update: t.field({ type: DimensionalBackupUpdateWithoutSchrodingerUser }),
    }),
  });
