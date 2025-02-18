import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutConspiracyDrafts } from "./createWithoutConspiracyDrafts";
import { GlitchRegistryUpdateWithoutConspiracyDrafts } from "./updateWithoutConspiracyDrafts";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationWithoutConspiracyDrafts = builder
  .inputRef<any>("GlitchRegistryUpdateRelationWithoutConspiracyDrafts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GlitchRegistryWhereUnique }),
      disconnect: t.field({ type: GlitchRegistryWhereUnique }),
      create: t.field({ type: GlitchRegistryCreateWithoutConspiracyDrafts }),
      update: t.field({ type: GlitchRegistryUpdateWithoutConspiracyDrafts }),
    }),
  });
