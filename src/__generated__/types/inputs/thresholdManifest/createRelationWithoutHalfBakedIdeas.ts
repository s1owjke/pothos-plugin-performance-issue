import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutHalfBakedIdeas } from "./createWithoutHalfBakedIdeas";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutHalfBakedIdeas = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutHalfBakedIdeas")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutHalfBakedIdeas }),
    }),
  });
