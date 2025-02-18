import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutRealmDirectories } from "./createWithoutRealmDirectories";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutRealmDirectories = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutRealmDirectories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutRealmDirectories] }),
    }),
  });
