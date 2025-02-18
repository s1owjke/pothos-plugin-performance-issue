import { builder } from "src/builder";

import { AlternativeFactCreateWithoutGloriousMistakes } from "./createWithoutGloriousMistakes";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactCreateRelationListWithoutGloriousMistakes = builder
  .inputRef<any>("AlternativeFactCreateRelationListWithoutGloriousMistakes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [AlternativeFactWhereUnique] }),
      create: t.field({ type: [AlternativeFactCreateWithoutGloriousMistakes] }),
    }),
  });
