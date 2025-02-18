import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutGlitchRegistry } from "./createWithoutGlitchRegistry";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftCreateRelationWithoutGlitchRegistry = builder
  .inputRef<any>("ConspiracyDraftCreateRelationWithoutGlitchRegistry")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ConspiracyDraftWhereUnique }),
      create: t.field({ type: ConspiracyDraftCreateWithoutGlitchRegistry }),
    }),
  });
