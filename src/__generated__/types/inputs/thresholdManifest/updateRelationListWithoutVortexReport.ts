import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutVortexReport = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutVortexReport] }),
    }),
  });
