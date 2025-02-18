import { builder } from "src/builder";

import { HalfBakedIdeaCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { HalfBakedIdeaUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { HalfBakedIdeaWhereUnique } from "./whereUnique";

export const HalfBakedIdeaUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("HalfBakedIdeaUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HalfBakedIdeaWhereUnique }),
      disconnect: t.field({ type: HalfBakedIdeaWhereUnique }),
      create: t.field({ type: HalfBakedIdeaCreateWithoutThresholdManifest }),
      update: t.field({ type: HalfBakedIdeaUpdateWithoutThresholdManifest }),
    }),
  });
