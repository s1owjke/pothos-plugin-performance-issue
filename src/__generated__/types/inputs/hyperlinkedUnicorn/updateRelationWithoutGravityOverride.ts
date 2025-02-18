import { builder } from "src/builder";

import { HyperlinkedUnicornCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { HyperlinkedUnicornUpdateWithoutGravityOverride } from "./updateWithoutGravityOverride";
import { HyperlinkedUnicornWhereUnique } from "./whereUnique";

export const HyperlinkedUnicornUpdateRelationWithoutGravityOverride = builder
  .inputRef<any>("HyperlinkedUnicornUpdateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HyperlinkedUnicornWhereUnique }),
      disconnect: t.field({ type: HyperlinkedUnicornWhereUnique }),
      create: t.field({ type: HyperlinkedUnicornCreateWithoutGravityOverride }),
      update: t.field({ type: HyperlinkedUnicornUpdateWithoutGravityOverride }),
    }),
  });
