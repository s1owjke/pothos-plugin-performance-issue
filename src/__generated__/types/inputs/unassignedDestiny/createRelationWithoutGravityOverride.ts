import { builder } from "src/builder";

import { UnassignedDestinyCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { UnassignedDestinyWhereUnique } from "./whereUnique";

export const UnassignedDestinyCreateRelationWithoutGravityOverride = builder
  .inputRef<any>("UnassignedDestinyCreateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnassignedDestinyWhereUnique }),
      create: t.field({ type: UnassignedDestinyCreateWithoutGravityOverride }),
    }),
  });
