import { builder } from "src/builder";

import { HyperlinkedUnicornCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { HyperlinkedUnicornWhereUnique } from "./whereUnique";

export const HyperlinkedUnicornCreateRelationListWithoutGravityOverride = builder
  .inputRef<any>("HyperlinkedUnicornCreateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HyperlinkedUnicornWhereUnique] }),
      create: t.field({ type: [HyperlinkedUnicornCreateWithoutGravityOverride] }),
    }),
  });
