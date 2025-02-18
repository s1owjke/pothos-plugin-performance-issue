import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutPendingDisasters } from "./createWithoutPendingDisasters";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelationWithoutPendingDisasters = builder
  .inputRef<any>("GlitchRegistryCreateRelationWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GlitchRegistryWhereUnique }),
      create: t.field({ type: GlitchRegistryCreateWithoutPendingDisasters }),
    }),
  });
