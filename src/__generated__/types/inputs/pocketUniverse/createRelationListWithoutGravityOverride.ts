import { builder } from "src/builder";

import { PocketUniverseCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { PocketUniverseWhereUnique } from "./whereUnique";

export const PocketUniverseCreateRelationListWithoutGravityOverride = builder
  .inputRef<any>("PocketUniverseCreateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PocketUniverseWhereUnique] }),
      create: t.field({ type: [PocketUniverseCreateWithoutGravityOverride] }),
    }),
  });
