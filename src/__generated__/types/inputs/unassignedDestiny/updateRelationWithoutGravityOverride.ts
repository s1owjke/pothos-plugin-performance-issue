import { builder } from "src/builder";

import { UnassignedDestinyCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { UnassignedDestinyUpdateWithoutGravityOverride } from "./updateWithoutGravityOverride";
import { UnassignedDestinyWhereUnique } from "./whereUnique";

export const UnassignedDestinyUpdateRelationWithoutGravityOverride = builder
  .inputRef<any>("UnassignedDestinyUpdateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnassignedDestinyWhereUnique }),
      disconnect: t.field({ type: UnassignedDestinyWhereUnique }),
      create: t.field({ type: UnassignedDestinyCreateWithoutGravityOverride }),
      update: t.field({ type: UnassignedDestinyUpdateWithoutGravityOverride }),
    }),
  });
