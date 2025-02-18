import { builder } from "src/builder";

import { SuspiciousTimestampCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { SuspiciousTimestampWhereUnique } from "./whereUnique";

export const SuspiciousTimestampUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("SuspiciousTimestampUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SuspiciousTimestampWhereUnique] }),
      set: t.field({ type: [SuspiciousTimestampWhereUnique] }),
      disconnect: t.field({ type: [SuspiciousTimestampWhereUnique] }),
      create: t.field({ type: [SuspiciousTimestampCreateWithoutThresholdManifest] }),
    }),
  });
