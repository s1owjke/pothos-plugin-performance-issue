import { builder } from "src/builder";

import { VortexReportCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationWithoutThresholdManifests = builder
  .inputRef<any>("VortexReportCreateRelationWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: VortexReportWhereUnique }),
      create: t.field({ type: VortexReportCreateWithoutThresholdManifests }),
    }),
  });
