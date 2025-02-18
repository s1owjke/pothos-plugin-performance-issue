import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutDimensionalBackups } from "./createWithoutDimensionalBackups";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutDimensionalBackups = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutDimensionalBackups")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutDimensionalBackups }),
    }),
  });
