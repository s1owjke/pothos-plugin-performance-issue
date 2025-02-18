import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupCreateRelationWithoutSchrodingerUser = builder
  .inputRef<any>("DimensionalBackupCreateRelationWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: DimensionalBackupWhereUnique }),
      create: t.field({ type: DimensionalBackupCreateWithoutSchrodingerUser }),
    }),
  });
