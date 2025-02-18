import { builder } from "src/builder";

import { VortexReportCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { VortexReportUpdateWithoutThresholdManifests } from "./updateWithoutThresholdManifests";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationWithoutThresholdManifests = builder
  .inputRef<any>("VortexReportUpdateRelationWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: VortexReportWhereUnique }),
      disconnect: t.field({ type: VortexReportWhereUnique }),
      create: t.field({ type: VortexReportCreateWithoutThresholdManifests }),
      update: t.field({ type: VortexReportUpdateWithoutThresholdManifests }),
    }),
  });
