import { builder } from "src/builder";

import { SuspiciousTimestampCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { SuspiciousTimestampWhereUnique } from "./whereUnique";

export const SuspiciousTimestampCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("SuspiciousTimestampCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SuspiciousTimestampWhereUnique }),
      create: t.field({ type: SuspiciousTimestampCreateWithoutThresholdManifest }),
    }),
  });
