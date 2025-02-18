import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutAlternativeFacts } from "./createWithoutAlternativeFacts";
import { GlitchRegistryUpdateWithoutAlternativeFacts } from "./updateWithoutAlternativeFacts";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationWithoutAlternativeFacts = builder
  .inputRef<any>("GlitchRegistryUpdateRelationWithoutAlternativeFacts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GlitchRegistryWhereUnique }),
      disconnect: t.field({ type: GlitchRegistryWhereUnique }),
      create: t.field({ type: GlitchRegistryCreateWithoutAlternativeFacts }),
      update: t.field({ type: GlitchRegistryUpdateWithoutAlternativeFacts }),
    }),
  });
