import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("DimensionalBackupUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [DimensionalBackupWhereUnique] }),
      set: t.field({ type: [DimensionalBackupWhereUnique] }),
      disconnect: t.field({ type: [DimensionalBackupWhereUnique] }),
      create: t.field({ type: [DimensionalBackupCreateWithoutThresholdManifest] }),
    }),
  });
