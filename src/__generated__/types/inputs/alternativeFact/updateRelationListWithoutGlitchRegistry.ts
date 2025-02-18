import { builder } from "src/builder";

import { AlternativeFactCreateWithoutGlitchRegistry } from "./createWithoutGlitchRegistry";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactUpdateRelationListWithoutGlitchRegistry = builder
  .inputRef<any>("AlternativeFactUpdateRelationListWithoutGlitchRegistry")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [AlternativeFactWhereUnique] }),
      set: t.field({ type: [AlternativeFactWhereUnique] }),
      disconnect: t.field({ type: [AlternativeFactWhereUnique] }),
      create: t.field({ type: [AlternativeFactCreateWithoutGlitchRegistry] }),
    }),
  });
