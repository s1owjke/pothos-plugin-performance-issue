import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutSuspiciousTimestamp } from "./createWithoutSuspiciousTimestamp";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutSuspiciousTimestamp = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutSuspiciousTimestamp")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutSuspiciousTimestamp }),
    }),
  });
