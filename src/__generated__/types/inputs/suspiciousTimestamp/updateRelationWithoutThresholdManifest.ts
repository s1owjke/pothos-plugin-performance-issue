import { builder } from "src/builder";

import { SuspiciousTimestampCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { SuspiciousTimestampUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { SuspiciousTimestampWhereUnique } from "./whereUnique";

export const SuspiciousTimestampUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("SuspiciousTimestampUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SuspiciousTimestampWhereUnique }),
      disconnect: t.field({ type: SuspiciousTimestampWhereUnique }),
      create: t.field({ type: SuspiciousTimestampCreateWithoutThresholdManifest }),
      update: t.field({ type: SuspiciousTimestampUpdateWithoutThresholdManifest }),
    }),
  });
