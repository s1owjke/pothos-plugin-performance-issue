import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { DimensionalBackupUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("DimensionalBackupUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: DimensionalBackupWhereUnique }),
      disconnect: t.field({ type: DimensionalBackupWhereUnique }),
      create: t.field({ type: DimensionalBackupCreateWithoutThresholdManifest }),
      update: t.field({ type: DimensionalBackupUpdateWithoutThresholdManifest }),
    }),
  });
