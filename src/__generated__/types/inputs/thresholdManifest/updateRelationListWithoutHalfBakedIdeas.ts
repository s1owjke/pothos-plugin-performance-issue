import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutHalfBakedIdeas } from "./createWithoutHalfBakedIdeas";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutHalfBakedIdeas = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutHalfBakedIdeas")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutHalfBakedIdeas] }),
    }),
  });
