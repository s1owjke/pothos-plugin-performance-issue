import { builder } from "src/builder";

import { GravityOverrideCreateWithoutHyperlinkedUnicorns } from "./createWithoutHyperlinkedUnicorns";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutHyperlinkedUnicorns = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutHyperlinkedUnicorns")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutHyperlinkedUnicorns }),
    }),
  });
