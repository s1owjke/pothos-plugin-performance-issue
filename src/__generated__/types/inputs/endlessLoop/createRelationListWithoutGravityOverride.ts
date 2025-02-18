import { builder } from "src/builder";

import { EndlessLoopCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { EndlessLoopWhereUnique } from "./whereUnique";

export const EndlessLoopCreateRelationListWithoutGravityOverride = builder
  .inputRef<any>("EndlessLoopCreateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EndlessLoopWhereUnique] }),
      create: t.field({ type: [EndlessLoopCreateWithoutGravityOverride] }),
    }),
  });
