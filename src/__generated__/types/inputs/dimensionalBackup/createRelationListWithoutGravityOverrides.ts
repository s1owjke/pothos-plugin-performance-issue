import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupCreateRelationListWithoutGravityOverrides = builder
  .inputRef<any>("DimensionalBackupCreateRelationListWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [DimensionalBackupWhereUnique] }),
      create: t.field({ type: [DimensionalBackupCreateWithoutGravityOverrides] }),
    }),
  });
