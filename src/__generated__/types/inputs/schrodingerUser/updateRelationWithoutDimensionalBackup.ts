import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutDimensionalBackup } from "./createWithoutDimensionalBackup";
import { SchrodingerUserUpdateWithoutDimensionalBackup } from "./updateWithoutDimensionalBackup";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationWithoutDimensionalBackup = builder
  .inputRef<any>("SchrodingerUserUpdateRelationWithoutDimensionalBackup")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      disconnect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutDimensionalBackup }),
      update: t.field({ type: SchrodingerUserUpdateWithoutDimensionalBackup }),
    }),
  });
