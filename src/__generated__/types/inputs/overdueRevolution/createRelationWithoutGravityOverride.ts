import { builder } from "src/builder";

import { OverdueRevolutionCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { OverdueRevolutionWhereUnique } from "./whereUnique";

export const OverdueRevolutionCreateRelationWithoutGravityOverride = builder
  .inputRef<any>("OverdueRevolutionCreateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: OverdueRevolutionWhereUnique }),
      create: t.field({ type: OverdueRevolutionCreateWithoutGravityOverride }),
    }),
  });
