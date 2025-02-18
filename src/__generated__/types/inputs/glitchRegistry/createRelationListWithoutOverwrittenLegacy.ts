import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutOverwrittenLegacy } from "./createWithoutOverwrittenLegacy";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelationListWithoutOverwrittenLegacy = builder
  .inputRef<any>("GlitchRegistryCreateRelationListWithoutOverwrittenLegacy")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutOverwrittenLegacy] }),
    }),
  });
