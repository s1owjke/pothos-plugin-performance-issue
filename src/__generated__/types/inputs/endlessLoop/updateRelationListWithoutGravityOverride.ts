import { builder } from "src/builder";

import { EndlessLoopCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { EndlessLoopWhereUnique } from "./whereUnique";

export const EndlessLoopUpdateRelationListWithoutGravityOverride = builder
  .inputRef<any>("EndlessLoopUpdateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EndlessLoopWhereUnique] }),
      set: t.field({ type: [EndlessLoopWhereUnique] }),
      disconnect: t.field({ type: [EndlessLoopWhereUnique] }),
      create: t.field({ type: [EndlessLoopCreateWithoutGravityOverride] }),
    }),
  });
