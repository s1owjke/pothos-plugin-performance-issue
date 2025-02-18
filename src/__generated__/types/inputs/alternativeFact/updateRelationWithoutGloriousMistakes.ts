import { builder } from "src/builder";

import { AlternativeFactCreateWithoutGloriousMistakes } from "./createWithoutGloriousMistakes";
import { AlternativeFactUpdateWithoutGloriousMistakes } from "./updateWithoutGloriousMistakes";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactUpdateRelationWithoutGloriousMistakes = builder
  .inputRef<any>("AlternativeFactUpdateRelationWithoutGloriousMistakes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: AlternativeFactWhereUnique }),
      disconnect: t.field({ type: AlternativeFactWhereUnique }),
      create: t.field({ type: AlternativeFactCreateWithoutGloriousMistakes }),
      update: t.field({ type: AlternativeFactUpdateWithoutGloriousMistakes }),
    }),
  });
