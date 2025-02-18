import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutGlitchRegistry } from "./createWithoutGlitchRegistry";
import { ConspiracyDraftUpdateWithoutGlitchRegistry } from "./updateWithoutGlitchRegistry";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftUpdateRelationWithoutGlitchRegistry = builder
  .inputRef<any>("ConspiracyDraftUpdateRelationWithoutGlitchRegistry")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ConspiracyDraftWhereUnique }),
      disconnect: t.field({ type: ConspiracyDraftWhereUnique }),
      create: t.field({ type: ConspiracyDraftCreateWithoutGlitchRegistry }),
      update: t.field({ type: ConspiracyDraftUpdateWithoutGlitchRegistry }),
    }),
  });
