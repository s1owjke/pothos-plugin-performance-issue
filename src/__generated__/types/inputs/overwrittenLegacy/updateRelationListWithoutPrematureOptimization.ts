import { builder } from "src/builder";

import { OverwrittenLegacyCreateWithoutPrematureOptimization } from "./createWithoutPrematureOptimization";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyUpdateRelationListWithoutPrematureOptimization = builder
  .inputRef<any>("OverwrittenLegacyUpdateRelationListWithoutPrematureOptimization")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [OverwrittenLegacyWhereUnique] }),
      set: t.field({ type: [OverwrittenLegacyWhereUnique] }),
      disconnect: t.field({ type: [OverwrittenLegacyWhereUnique] }),
      create: t.field({ type: [OverwrittenLegacyCreateWithoutPrematureOptimization] }),
    }),
  });
