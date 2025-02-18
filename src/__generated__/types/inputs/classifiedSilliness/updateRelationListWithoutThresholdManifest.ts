import { builder } from "src/builder";

import { ClassifiedSillinessCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("ClassifiedSillinessUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      set: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      disconnect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
      create: t.field({ type: [ClassifiedSillinessCreateWithoutThresholdManifest] }),
    }),
  });
