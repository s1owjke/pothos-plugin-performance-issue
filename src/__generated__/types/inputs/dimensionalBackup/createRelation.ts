import { builder } from "src/builder";

import { DimensionalBackupCreate } from "./create";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupCreateRelation = builder.inputRef<any>("DimensionalBackupCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: DimensionalBackupWhereUnique }),
    create: t.field({ type: DimensionalBackupCreate }),
  }),
});
