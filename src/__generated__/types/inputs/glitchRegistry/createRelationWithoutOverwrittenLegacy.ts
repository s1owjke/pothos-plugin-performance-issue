import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutOverwrittenLegacy } from "./createWithoutOverwrittenLegacy";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelationWithoutOverwrittenLegacy = builder
  .inputRef<any>("GlitchRegistryCreateRelationWithoutOverwrittenLegacy")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GlitchRegistryWhereUnique }),
      create: t.field({ type: GlitchRegistryCreateWithoutOverwrittenLegacy }),
    }),
  });
