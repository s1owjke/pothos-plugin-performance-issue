import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutAlternativeFacts } from "./createWithoutAlternativeFacts";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelationListWithoutAlternativeFacts = builder
  .inputRef<any>("GlitchRegistryCreateRelationListWithoutAlternativeFacts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutAlternativeFacts] }),
    }),
  });
