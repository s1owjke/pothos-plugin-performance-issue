import { builder } from "src/builder";

import { OverdueRevolutionCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { OverdueRevolutionWhereUnique } from "./whereUnique";

export const OverdueRevolutionCreateRelationListWithoutGravityOverride = builder
  .inputRef<any>("OverdueRevolutionCreateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [OverdueRevolutionWhereUnique] }),
      create: t.field({ type: [OverdueRevolutionCreateWithoutGravityOverride] }),
    }),
  });
