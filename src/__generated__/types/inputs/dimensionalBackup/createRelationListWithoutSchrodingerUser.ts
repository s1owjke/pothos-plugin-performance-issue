import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupCreateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("DimensionalBackupCreateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [DimensionalBackupWhereUnique] }),
      create: t.field({ type: [DimensionalBackupCreateWithoutSchrodingerUser] }),
    }),
  });
