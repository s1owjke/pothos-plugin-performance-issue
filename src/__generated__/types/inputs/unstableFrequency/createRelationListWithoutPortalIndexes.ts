import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutPortalIndexes } from "./createWithoutPortalIndexes";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyCreateRelationListWithoutPortalIndexes = builder
  .inputRef<any>("UnstableFrequencyCreateRelationListWithoutPortalIndexes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnstableFrequencyWhereUnique] }),
      create: t.field({ type: [UnstableFrequencyCreateWithoutPortalIndexes] }),
    }),
  });
