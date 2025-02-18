import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutThresholdManifests = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutThresholdManifests] }),
    }),
  });
