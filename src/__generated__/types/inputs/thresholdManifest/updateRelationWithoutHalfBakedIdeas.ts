import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutHalfBakedIdeas } from "./createWithoutHalfBakedIdeas";
import { ThresholdManifestUpdateWithoutHalfBakedIdeas } from "./updateWithoutHalfBakedIdeas";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutHalfBakedIdeas = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutHalfBakedIdeas")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutHalfBakedIdeas }),
      update: t.field({ type: ThresholdManifestUpdateWithoutHalfBakedIdeas }),
    }),
  });
