import { builder } from "src/builder";

import { GravityOverrideCreateWithoutHyperlinkedUnicorns } from "./createWithoutHyperlinkedUnicorns";
import { GravityOverrideUpdateWithoutHyperlinkedUnicorns } from "./updateWithoutHyperlinkedUnicorns";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutHyperlinkedUnicorns = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutHyperlinkedUnicorns")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutHyperlinkedUnicorns }),
      update: t.field({ type: GravityOverrideUpdateWithoutHyperlinkedUnicorns }),
    }),
  });
