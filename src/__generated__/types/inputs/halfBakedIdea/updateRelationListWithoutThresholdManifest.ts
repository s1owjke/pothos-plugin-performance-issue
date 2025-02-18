import { builder } from "src/builder";

import { HalfBakedIdeaCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { HalfBakedIdeaWhereUnique } from "./whereUnique";

export const HalfBakedIdeaUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("HalfBakedIdeaUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HalfBakedIdeaWhereUnique] }),
      set: t.field({ type: [HalfBakedIdeaWhereUnique] }),
      disconnect: t.field({ type: [HalfBakedIdeaWhereUnique] }),
      create: t.field({ type: [HalfBakedIdeaCreateWithoutThresholdManifest] }),
    }),
  });
