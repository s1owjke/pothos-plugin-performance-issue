import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("ClassifiedSillinessCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      create: t.field({ type: [ClassifiedSillinessCreateWithoutThresholdManifest] }),
    }),
  });
