import { builder } from "src/builder";

import { HalfBakedIdeaCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { HalfBakedIdeaWhereUnique } from "./whereUnique";

export const HalfBakedIdeaCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("HalfBakedIdeaCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HalfBakedIdeaWhereUnique] }),
      create: t.field({ type: [HalfBakedIdeaCreateWithoutThresholdManifest] }),
    }),
  });
