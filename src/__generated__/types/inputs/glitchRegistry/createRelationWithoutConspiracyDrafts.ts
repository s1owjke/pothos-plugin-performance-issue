import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutConspiracyDrafts } from "./createWithoutConspiracyDrafts";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelationWithoutConspiracyDrafts = builder
  .inputRef<any>("GlitchRegistryCreateRelationWithoutConspiracyDrafts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GlitchRegistryWhereUnique }),
      create: t.field({ type: GlitchRegistryCreateWithoutConspiracyDrafts }),
    }),
  });
