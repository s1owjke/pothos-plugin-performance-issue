import { builder } from "src/builder";

import { GloriousMistakeCreateWithoutAlternativeFact } from "./createWithoutAlternativeFact";
import { GloriousMistakeWhereUnique } from "./whereUnique";

export const GloriousMistakeUpdateRelationListWithoutAlternativeFact = builder
  .inputRef<any>("GloriousMistakeUpdateRelationListWithoutAlternativeFact")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GloriousMistakeWhereUnique] }),
      set: t.field({ type: [GloriousMistakeWhereUnique] }),
      disconnect: t.field({ type: [GloriousMistakeWhereUnique] }),
      create: t.field({ type: [GloriousMistakeCreateWithoutAlternativeFact] }),
    }),
  });
