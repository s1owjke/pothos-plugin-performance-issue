import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutConspiracyDrafts } from "./createWithoutConspiracyDrafts";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationListWithoutConspiracyDrafts = builder
  .inputRef<any>("GlitchRegistryUpdateRelationListWithoutConspiracyDrafts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      set: t.field({ type: [GlitchRegistryWhereUnique] }),
      disconnect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutConspiracyDrafts] }),
    }),
  });
