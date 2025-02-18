import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutEchoChamber } from "./createWithoutEchoChamber";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelationListWithoutEchoChamber = builder
  .inputRef<any>("GlitchRegistryCreateRelationListWithoutEchoChamber")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutEchoChamber] }),
    }),
  });
