import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutPendingDisasters } from "./createWithoutPendingDisasters";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelationListWithoutPendingDisasters = builder
  .inputRef<any>("GlitchRegistryCreateRelationListWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutPendingDisasters] }),
    }),
  });
