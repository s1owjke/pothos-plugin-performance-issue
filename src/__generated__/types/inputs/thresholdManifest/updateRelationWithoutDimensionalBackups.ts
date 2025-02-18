import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutDimensionalBackups } from "./createWithoutDimensionalBackups";
import { ThresholdManifestUpdateWithoutDimensionalBackups } from "./updateWithoutDimensionalBackups";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutDimensionalBackups = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutDimensionalBackups")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutDimensionalBackups }),
      update: t.field({ type: ThresholdManifestUpdateWithoutDimensionalBackups }),
    }),
  });
