import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutSuspiciousTimestamp } from "./createWithoutSuspiciousTimestamp";
import { ThresholdManifestUpdateWithoutSuspiciousTimestamp } from "./updateWithoutSuspiciousTimestamp";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutSuspiciousTimestamp = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutSuspiciousTimestamp")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutSuspiciousTimestamp }),
      update: t.field({ type: ThresholdManifestUpdateWithoutSuspiciousTimestamp }),
    }),
  });
