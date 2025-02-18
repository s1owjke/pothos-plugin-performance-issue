import { builder } from "src/builder";

import { GloriousMistakeCreateWithoutAlternativeFact } from "./createWithoutAlternativeFact";
import { GloriousMistakeUpdateWithoutAlternativeFact } from "./updateWithoutAlternativeFact";
import { GloriousMistakeWhereUnique } from "./whereUnique";

export const GloriousMistakeUpdateRelationWithoutAlternativeFact = builder
  .inputRef<any>("GloriousMistakeUpdateRelationWithoutAlternativeFact")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GloriousMistakeWhereUnique }),
      disconnect: t.field({ type: GloriousMistakeWhereUnique }),
      create: t.field({ type: GloriousMistakeCreateWithoutAlternativeFact }),
      update: t.field({ type: GloriousMistakeUpdateWithoutAlternativeFact }),
    }),
  });
