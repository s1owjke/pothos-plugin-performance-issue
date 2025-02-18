import { builder } from "src/builder";

import { DimensionalBackupCreate } from "./create";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupCreateRelationList = builder.inputRef<any>("DimensionalBackupCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [DimensionalBackupWhereUnique] }),
    create: t.field({ type: [DimensionalBackupCreate] }),
  }),
});
