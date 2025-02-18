import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { DimensionalBackupUpdateWithoutGravityOverrides } from "./updateWithoutGravityOverrides";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupUpdateRelationWithoutGravityOverrides = builder
  .inputRef<any>("DimensionalBackupUpdateRelationWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: DimensionalBackupWhereUnique }),
      disconnect: t.field({ type: DimensionalBackupWhereUnique }),
      create: t.field({ type: DimensionalBackupCreateWithoutGravityOverrides }),
      update: t.field({ type: DimensionalBackupUpdateWithoutGravityOverrides }),
    }),
  });
