import { builder } from "src/builder";

import { AlternativeFactCreateWithoutGlitchRegistry } from "./createWithoutGlitchRegistry";
import { AlternativeFactUpdateWithoutGlitchRegistry } from "./updateWithoutGlitchRegistry";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactUpdateRelationWithoutGlitchRegistry = builder
  .inputRef<any>("AlternativeFactUpdateRelationWithoutGlitchRegistry")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: AlternativeFactWhereUnique }),
      disconnect: t.field({ type: AlternativeFactWhereUnique }),
      create: t.field({ type: AlternativeFactCreateWithoutGlitchRegistry }),
      update: t.field({ type: AlternativeFactUpdateWithoutGlitchRegistry }),
    }),
  });
