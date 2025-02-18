import { builder } from "src/builder";

import { UnassignedDestinyCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { UnassignedDestinyWhereUnique } from "./whereUnique";

export const UnassignedDestinyUpdateRelationListWithoutGravityOverride = builder
  .inputRef<any>("UnassignedDestinyUpdateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnassignedDestinyWhereUnique] }),
      set: t.field({ type: [UnassignedDestinyWhereUnique] }),
      disconnect: t.field({ type: [UnassignedDestinyWhereUnique] }),
      create: t.field({ type: [UnassignedDestinyCreateWithoutGravityOverride] }),
    }),
  });
