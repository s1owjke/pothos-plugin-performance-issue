import { builder } from "src/builder";

import { SuspiciousTimestampCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { SuspiciousTimestampWhereUnique } from "./whereUnique";

export const SuspiciousTimestampCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("SuspiciousTimestampCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SuspiciousTimestampWhereUnique] }),
      create: t.field({ type: [SuspiciousTimestampCreateWithoutThresholdManifest] }),
    }),
  });
