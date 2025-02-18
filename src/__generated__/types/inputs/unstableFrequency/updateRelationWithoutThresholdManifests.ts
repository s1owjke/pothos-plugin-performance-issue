import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { UnstableFrequencyUpdateWithoutThresholdManifests } from "./updateWithoutThresholdManifests";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutThresholdManifests = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutThresholdManifests }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutThresholdManifests }),
    }),
  });
