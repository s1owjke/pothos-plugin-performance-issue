import { builder } from "src/builder";

import { AlternativeFactCreateWithoutGlitchRegistry } from "./createWithoutGlitchRegistry";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactCreateRelationWithoutGlitchRegistry = builder
  .inputRef<any>("AlternativeFactCreateRelationWithoutGlitchRegistry")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: AlternativeFactWhereUnique }),
      create: t.field({ type: AlternativeFactCreateWithoutGlitchRegistry }),
    }),
  });
