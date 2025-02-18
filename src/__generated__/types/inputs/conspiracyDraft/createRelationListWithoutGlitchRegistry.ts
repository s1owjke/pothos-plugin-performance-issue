import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutGlitchRegistry } from "./createWithoutGlitchRegistry";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftCreateRelationListWithoutGlitchRegistry = builder
  .inputRef<any>("ConspiracyDraftCreateRelationListWithoutGlitchRegistry")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ConspiracyDraftWhereUnique] }),
      create: t.field({ type: [ConspiracyDraftCreateWithoutGlitchRegistry] }),
    }),
  });
