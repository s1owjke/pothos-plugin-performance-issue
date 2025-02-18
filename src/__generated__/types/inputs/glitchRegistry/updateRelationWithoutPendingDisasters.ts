import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutPendingDisasters } from "./createWithoutPendingDisasters";
import { GlitchRegistryUpdateWithoutPendingDisasters } from "./updateWithoutPendingDisasters";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationWithoutPendingDisasters = builder
  .inputRef<any>("GlitchRegistryUpdateRelationWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GlitchRegistryWhereUnique }),
      disconnect: t.field({ type: GlitchRegistryWhereUnique }),
      create: t.field({ type: GlitchRegistryCreateWithoutPendingDisasters }),
      update: t.field({ type: GlitchRegistryUpdateWithoutPendingDisasters }),
    }),
  });
