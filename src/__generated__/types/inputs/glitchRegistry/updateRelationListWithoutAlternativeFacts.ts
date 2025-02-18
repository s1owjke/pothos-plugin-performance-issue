import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutAlternativeFacts } from "./createWithoutAlternativeFacts";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationListWithoutAlternativeFacts = builder
  .inputRef<any>("GlitchRegistryUpdateRelationListWithoutAlternativeFacts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      set: t.field({ type: [GlitchRegistryWhereUnique] }),
      disconnect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutAlternativeFacts] }),
    }),
  });
