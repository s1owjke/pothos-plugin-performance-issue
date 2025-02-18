import { builder } from "src/builder";

import { GravityOverrideCreateWithoutHyperlinkedUnicorns } from "./createWithoutHyperlinkedUnicorns";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationListWithoutHyperlinkedUnicorns = builder
  .inputRef<any>("GravityOverrideCreateRelationListWithoutHyperlinkedUnicorns")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutHyperlinkedUnicorns] }),
    }),
  });
