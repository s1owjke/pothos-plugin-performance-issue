import { builder } from "src/builder";

import { DimensionalBackupCreate } from "./create";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupUpdateRelationList = builder.inputRef<any>("DimensionalBackupUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [DimensionalBackupWhereUnique] }),
    set: t.field({ type: [DimensionalBackupWhereUnique] }),
    disconnect: t.field({ type: [DimensionalBackupWhereUnique] }),
    create: t.field({ type: [DimensionalBackupCreate] }),
  }),
});
