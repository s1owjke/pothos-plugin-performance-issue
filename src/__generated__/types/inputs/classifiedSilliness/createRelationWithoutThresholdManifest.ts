import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("ClassifiedSillinessCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ClassifiedSillinessWhereUnique }),
      create: t.field({ type: ClassifiedSillinessCreateWithoutThresholdManifest }),
    }),
  });
