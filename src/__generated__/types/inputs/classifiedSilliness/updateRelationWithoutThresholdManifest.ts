import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { ClassifiedSillinessUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("ClassifiedSillinessUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ClassifiedSillinessWhereUnique }),
      disconnect: t.field({ type: ClassifiedSillinessWhereUnique }),
      create: t.field({ type: ClassifiedSillinessCreateWithoutThresholdManifest }),
      update: t.field({ type: ClassifiedSillinessUpdateWithoutThresholdManifest }),
    }),
  });
