import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutSuspiciousTimestamp } from "./createWithoutSuspiciousTimestamp";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutSuspiciousTimestamp = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutSuspiciousTimestamp")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutSuspiciousTimestamp] }),
    }),
  });
