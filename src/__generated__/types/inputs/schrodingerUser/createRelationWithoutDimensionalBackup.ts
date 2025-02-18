import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutDimensionalBackup } from "./createWithoutDimensionalBackup";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationWithoutDimensionalBackup = builder
  .inputRef<any>("SchrodingerUserCreateRelationWithoutDimensionalBackup")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutDimensionalBackup }),
    }),
  });
