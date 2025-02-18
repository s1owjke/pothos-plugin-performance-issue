import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutDimensionalBackups } from "./createWithoutDimensionalBackups";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutDimensionalBackups = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutDimensionalBackups")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutDimensionalBackups] }),
    }),
  });
