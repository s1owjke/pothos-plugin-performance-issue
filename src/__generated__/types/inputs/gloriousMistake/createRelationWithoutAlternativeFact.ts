import { builder } from "src/builder";

import { GloriousMistakeCreateWithoutAlternativeFact } from "./createWithoutAlternativeFact";
import { GloriousMistakeWhereUnique } from "./whereUnique";

export const GloriousMistakeCreateRelationWithoutAlternativeFact = builder
  .inputRef<any>("GloriousMistakeCreateRelationWithoutAlternativeFact")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GloriousMistakeWhereUnique }),
      create: t.field({ type: GloriousMistakeCreateWithoutAlternativeFact }),
    }),
  });
