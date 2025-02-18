import { builder } from "src/builder";

import { HalfBakedIdeaCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { HalfBakedIdeaWhereUnique } from "./whereUnique";

export const HalfBakedIdeaCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("HalfBakedIdeaCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HalfBakedIdeaWhereUnique }),
      create: t.field({ type: HalfBakedIdeaCreateWithoutThresholdManifest }),
    }),
  });
