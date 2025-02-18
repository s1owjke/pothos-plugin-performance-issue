import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutEchoChamber } from "./createWithoutEchoChamber";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationListWithoutEchoChamber = builder
  .inputRef<any>("GlitchRegistryUpdateRelationListWithoutEchoChamber")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      set: t.field({ type: [GlitchRegistryWhereUnique] }),
      disconnect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutEchoChamber] }),
    }),
  });
