import { builder } from "src/builder";

import { VortexReportCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationListWithoutThresholdManifests = builder
  .inputRef<any>("VortexReportUpdateRelationListWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      set: t.field({ type: [VortexReportWhereUnique] }),
      disconnect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutThresholdManifests] }),
    }),
  });
