import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutRealmDirectories } from "./createWithoutRealmDirectories";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutRealmDirectories = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutRealmDirectories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutRealmDirectories] }),
    }),
  });
