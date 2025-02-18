import { builder } from "src/builder";

import { AlternativeFactCreateWithoutGlitchRegistry } from "./createWithoutGlitchRegistry";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactCreateRelationListWithoutGlitchRegistry = builder
  .inputRef<any>("AlternativeFactCreateRelationListWithoutGlitchRegistry")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [AlternativeFactWhereUnique] }),
      create: t.field({ type: [AlternativeFactCreateWithoutGlitchRegistry] }),
    }),
  });
