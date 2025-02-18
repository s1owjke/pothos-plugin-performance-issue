import { builder } from "src/builder";

import { DimensionalBackupCreate } from "./create";
import { DimensionalBackupUpdate } from "./update";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupUpdateRelation = builder.inputRef<any>("DimensionalBackupUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: DimensionalBackupWhereUnique }),
    disconnect: t.field({ type: DimensionalBackupWhereUnique }),
    create: t.field({ type: DimensionalBackupCreate }),
    update: t.field({ type: DimensionalBackupUpdate }),
  }),
});
