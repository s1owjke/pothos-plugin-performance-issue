import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutOverwrittenLegacy } from "./createWithoutOverwrittenLegacy";
import { GlitchRegistryUpdateWithoutOverwrittenLegacy } from "./updateWithoutOverwrittenLegacy";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationWithoutOverwrittenLegacy = builder
  .inputRef<any>("GlitchRegistryUpdateRelationWithoutOverwrittenLegacy")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GlitchRegistryWhereUnique }),
      disconnect: t.field({ type: GlitchRegistryWhereUnique }),
      create: t.field({ type: GlitchRegistryCreateWithoutOverwrittenLegacy }),
      update: t.field({ type: GlitchRegistryUpdateWithoutOverwrittenLegacy }),
    }),
  });
