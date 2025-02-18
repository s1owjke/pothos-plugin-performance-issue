import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("DimensionalBackupCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: DimensionalBackupWhereUnique }),
      create: t.field({ type: DimensionalBackupCreateWithoutThresholdManifest }),
    }),
  });
