import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationListWithoutThresholdManifests = builder
  .inputRef<any>("GlitchRegistryUpdateRelationListWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      set: t.field({ type: [GlitchRegistryWhereUnique] }),
      disconnect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutThresholdManifests] }),
    }),
  });
