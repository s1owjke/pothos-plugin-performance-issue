import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutPendingDisasters } from "./createWithoutPendingDisasters";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationListWithoutPendingDisasters = builder
  .inputRef<any>("GlitchRegistryUpdateRelationListWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      set: t.field({ type: [GlitchRegistryWhereUnique] }),
      disconnect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutPendingDisasters] }),
    }),
  });
