import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutRealmDirectories } from "./createWithoutRealmDirectories";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationWithoutRealmDirectories = builder
  .inputRef<any>("UnstableFrequencyCreateRelationWithoutRealmDirectories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutRealmDirectories }),
    }),
  });
