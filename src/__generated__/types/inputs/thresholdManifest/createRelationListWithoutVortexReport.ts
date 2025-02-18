import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutVortexReport = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutVortexReport] }),
    }),
  });
