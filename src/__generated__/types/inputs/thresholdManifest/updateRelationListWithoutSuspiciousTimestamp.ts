import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutSuspiciousTimestamp } from "./createWithoutSuspiciousTimestamp";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutSuspiciousTimestamp = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutSuspiciousTimestamp")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutSuspiciousTimestamp] }),
    }),
  });
