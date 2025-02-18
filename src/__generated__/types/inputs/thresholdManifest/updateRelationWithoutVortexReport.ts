import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { ThresholdManifestUpdateWithoutVortexReport } from "./updateWithoutVortexReport";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutVortexReport = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutVortexReport }),
      update: t.field({ type: ThresholdManifestUpdateWithoutVortexReport }),
    }),
  });
