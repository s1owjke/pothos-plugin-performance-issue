import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutHalfBakedIdeas } from "./createWithoutHalfBakedIdeas";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutHalfBakedIdeas = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutHalfBakedIdeas")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutHalfBakedIdeas] }),
    }),
  });
