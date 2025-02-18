import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutDimensionalBackups } from "./createWithoutDimensionalBackups";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutDimensionalBackups = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutDimensionalBackups")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutDimensionalBackups] }),
    }),
  });
