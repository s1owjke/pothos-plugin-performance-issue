import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutPortalIndexes } from "./createWithoutPortalIndexes";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationListWithoutPortalIndexes = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationListWithoutPortalIndexes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      set: t.field({ type: [UnstableFrequencyWhereUnique] }),
      disconnect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutPortalIndexes] }),
    }),
  });
