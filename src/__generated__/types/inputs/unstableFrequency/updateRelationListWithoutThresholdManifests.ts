import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutThresholdManifests = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutThresholdManifests] }),
    }),
  });
