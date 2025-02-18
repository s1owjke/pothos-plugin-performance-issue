import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutOverwrittenLegacy } from "./createWithoutOverwrittenLegacy";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationListWithoutOverwrittenLegacy = builder
  .inputRef<any>("GlitchRegistryUpdateRelationListWithoutOverwrittenLegacy")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      set: t.field({ type: [GlitchRegistryWhereUnique] }),
      disconnect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutOverwrittenLegacy] }),
    }),
  });
