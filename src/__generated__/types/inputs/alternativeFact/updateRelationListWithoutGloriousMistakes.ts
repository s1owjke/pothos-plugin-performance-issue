import { builder } from "src/builder";

import { AlternativeFactCreateWithoutGloriousMistakes } from "./createWithoutGloriousMistakes";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactUpdateRelationListWithoutGloriousMistakes = builder
  .inputRef<any>("AlternativeFactUpdateRelationListWithoutGloriousMistakes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [AlternativeFactWhereUnique] }),
      set: t.field({ type: [AlternativeFactWhereUnique] }),
      disconnect: t.field({ type: [AlternativeFactWhereUnique] }),
      create: t.field({ type: [AlternativeFactCreateWithoutGloriousMistakes] }),
    }),
  });
