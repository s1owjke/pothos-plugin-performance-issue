import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutAlternativeFacts } from "./createWithoutAlternativeFacts";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelationWithoutAlternativeFacts = builder
  .inputRef<any>("GlitchRegistryCreateRelationWithoutAlternativeFacts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GlitchRegistryWhereUnique }),
      create: t.field({ type: GlitchRegistryCreateWithoutAlternativeFacts }),
    }),
  });
