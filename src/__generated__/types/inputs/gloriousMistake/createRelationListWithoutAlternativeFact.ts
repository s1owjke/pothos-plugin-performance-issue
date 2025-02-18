import { builder } from "src/builder";

import { GloriousMistakeCreateWithoutAlternativeFact } from "./createWithoutAlternativeFact";
import { GloriousMistakeWhereUnique } from "./whereUnique";

export const GloriousMistakeCreateRelationListWithoutAlternativeFact = builder
  .inputRef<any>("GloriousMistakeCreateRelationListWithoutAlternativeFact")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GloriousMistakeWhereUnique] }),
      create: t.field({ type: [GloriousMistakeCreateWithoutAlternativeFact] }),
    }),
  });
