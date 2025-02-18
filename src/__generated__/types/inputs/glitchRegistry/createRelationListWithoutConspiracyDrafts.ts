import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutConspiracyDrafts } from "./createWithoutConspiracyDrafts";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelationListWithoutConspiracyDrafts = builder
  .inputRef<any>("GlitchRegistryCreateRelationListWithoutConspiracyDrafts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutConspiracyDrafts] }),
    }),
  });
