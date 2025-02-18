import { builder } from "src/builder";

import { DimensionalBackupCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { DimensionalBackupWhereUnique } from "./whereUnique";

export const DimensionalBackupCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("DimensionalBackupCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [DimensionalBackupWhereUnique] }),
      create: t.field({ type: [DimensionalBackupCreateWithoutThresholdManifest] }),
    }),
  });
