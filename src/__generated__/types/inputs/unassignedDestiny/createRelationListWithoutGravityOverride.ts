import { builder } from "src/builder";

import { UnassignedDestinyCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { UnassignedDestinyWhereUnique } from "./whereUnique";

export const UnassignedDestinyCreateRelationListWithoutGravityOverride = builder
  .inputRef<any>("UnassignedDestinyCreateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnassignedDestinyWhereUnique] }),
      create: t.field({ type: [UnassignedDestinyCreateWithoutGravityOverride] }),
    }),
  });
