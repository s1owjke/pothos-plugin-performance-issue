import { builder } from "src/builder";

import { GravityOverrideCreateWithoutHyperlinkedUnicorns } from "./createWithoutHyperlinkedUnicorns";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutHyperlinkedUnicorns = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutHyperlinkedUnicorns")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutHyperlinkedUnicorns] }),
    }),
  });
