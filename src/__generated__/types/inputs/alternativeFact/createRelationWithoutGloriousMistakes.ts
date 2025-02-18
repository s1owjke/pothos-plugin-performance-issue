import { builder } from "src/builder";

import { AlternativeFactCreateWithoutGloriousMistakes } from "./createWithoutGloriousMistakes";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactCreateRelationWithoutGloriousMistakes = builder
  .inputRef<any>("AlternativeFactCreateRelationWithoutGloriousMistakes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: AlternativeFactWhereUnique }),
      create: t.field({ type: AlternativeFactCreateWithoutGloriousMistakes }),
    }),
  });
