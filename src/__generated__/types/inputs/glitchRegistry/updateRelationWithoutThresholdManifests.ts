import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { GlitchRegistryUpdateWithoutThresholdManifests } from "./updateWithoutThresholdManifests";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationWithoutThresholdManifests = builder
  .inputRef<any>("GlitchRegistryUpdateRelationWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GlitchRegistryWhereUnique }),
      disconnect: t.field({ type: GlitchRegistryWhereUnique }),
      create: t.field({ type: GlitchRegistryCreateWithoutThresholdManifests }),
      update: t.field({ type: GlitchRegistryUpdateWithoutThresholdManifests }),
    }),
  });
