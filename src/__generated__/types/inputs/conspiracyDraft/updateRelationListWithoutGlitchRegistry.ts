import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutGlitchRegistry } from "./createWithoutGlitchRegistry";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftUpdateRelationListWithoutGlitchRegistry = builder
  .inputRef<any>("ConspiracyDraftUpdateRelationListWithoutGlitchRegistry")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ConspiracyDraftWhereUnique] }),
      set: t.field({ type: [ConspiracyDraftWhereUnique] }),
      disconnect: t.field({ type: [ConspiracyDraftWhereUnique] }),
      create: t.field({ type: [ConspiracyDraftCreateWithoutGlitchRegistry] }),
    }),
  });
