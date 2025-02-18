import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutDimensionalBackup } from "./createWithoutDimensionalBackup";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationListWithoutDimensionalBackup = builder
  .inputRef<any>("SchrodingerUserUpdateRelationListWithoutDimensionalBackup")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      set: t.field({ type: [SchrodingerUserWhereUnique] }),
      disconnect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutDimensionalBackup] }),
    }),
  });
