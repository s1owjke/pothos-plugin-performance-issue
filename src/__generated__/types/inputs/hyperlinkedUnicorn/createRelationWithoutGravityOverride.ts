import { builder } from "src/builder";

import { HyperlinkedUnicornCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { HyperlinkedUnicornWhereUnique } from "./whereUnique";

export const HyperlinkedUnicornCreateRelationWithoutGravityOverride = builder
  .inputRef<any>("HyperlinkedUnicornCreateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HyperlinkedUnicornWhereUnique }),
      create: t.field({ type: HyperlinkedUnicornCreateWithoutGravityOverride }),
    }),
  });
