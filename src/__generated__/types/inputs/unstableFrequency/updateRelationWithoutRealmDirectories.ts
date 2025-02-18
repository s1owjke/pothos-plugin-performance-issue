import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutRealmDirectories } from "./createWithoutRealmDirectories";
import { UnstableFrequencyUpdateWithoutRealmDirectories } from "./updateWithoutRealmDirectories";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutRealmDirectories = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutRealmDirectories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutRealmDirectories }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutRealmDirectories }),
    }),
  });
