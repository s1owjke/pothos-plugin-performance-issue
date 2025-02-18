import { builder } from "src/builder";

import { HyperlinkedUnicornCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { HyperlinkedUnicornWhereUnique } from "./whereUnique";

export const HyperlinkedUnicornUpdateRelationListWithoutGravityOverride = builder
  .inputRef<any>("HyperlinkedUnicornUpdateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HyperlinkedUnicornWhereUnique] }),
      set: t.field({ type: [HyperlinkedUnicornWhereUnique] }),
      disconnect: t.field({ type: [HyperlinkedUnicornWhereUnique] }),
      create: t.field({ type: [HyperlinkedUnicornCreateWithoutGravityOverride] }),
    }),
  });
