import { builder } from "src/builder";

import { OverdueRevolutionCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { OverdueRevolutionWhereUnique } from "./whereUnique";

export const OverdueRevolutionUpdateRelationListWithoutGravityOverride = builder
  .inputRef<any>("OverdueRevolutionUpdateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [OverdueRevolutionWhereUnique] }),
      set: t.field({ type: [OverdueRevolutionWhereUnique] }),
      disconnect: t.field({ type: [OverdueRevolutionWhereUnique] }),
      create: t.field({ type: [OverdueRevolutionCreateWithoutGravityOverride] }),
    }),
  });
