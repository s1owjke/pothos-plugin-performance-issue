import { builder } from "src/builder";

import { OverdueRevolutionCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { OverdueRevolutionUpdateWithoutGravityOverride } from "./updateWithoutGravityOverride";
import { OverdueRevolutionWhereUnique } from "./whereUnique";

export const OverdueRevolutionUpdateRelationWithoutGravityOverride = builder
  .inputRef<any>("OverdueRevolutionUpdateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: OverdueRevolutionWhereUnique }),
      disconnect: t.field({ type: OverdueRevolutionWhereUnique }),
      create: t.field({ type: OverdueRevolutionCreateWithoutGravityOverride }),
      update: t.field({ type: OverdueRevolutionUpdateWithoutGravityOverride }),
    }),
  });
