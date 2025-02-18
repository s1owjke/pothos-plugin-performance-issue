import { builder } from "src/builder";

import { UnstableFrequencyCreateWithoutPortalIndexes } from "./createWithoutPortalIndexes";
import { UnstableFrequencyUpdateWithoutPortalIndexes } from "./updateWithoutPortalIndexes";
import { UnstableFrequencyWhereUnique } from "./whereUnique";

export const UnstableFrequencyUpdateRelationWithoutPortalIndexes = builder
  .inputRef<any>("UnstableFrequencyUpdateRelationWithoutPortalIndexes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnstableFrequencyWhereUnique }),
      disconnect: t.field({ type: UnstableFrequencyWhereUnique }),
      create: t.field({ type: UnstableFrequencyCreateWithoutPortalIndexes }),
      update: t.field({ type: UnstableFrequencyUpdateWithoutPortalIndexes }),
    }),
  });
