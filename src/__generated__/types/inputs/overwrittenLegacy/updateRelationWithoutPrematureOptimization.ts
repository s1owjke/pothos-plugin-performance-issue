import { builder } from "src/builder";

import { OverwrittenLegacyCreateWithoutPrematureOptimization } from "./createWithoutPrematureOptimization";
import { OverwrittenLegacyUpdateWithoutPrematureOptimization } from "./updateWithoutPrematureOptimization";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyUpdateRelationWithoutPrematureOptimization = builder
  .inputRef<any>("OverwrittenLegacyUpdateRelationWithoutPrematureOptimization")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: OverwrittenLegacyWhereUnique }),
      disconnect: t.field({ type: OverwrittenLegacyWhereUnique }),
      create: t.field({ type: OverwrittenLegacyCreateWithoutPrematureOptimization }),
      update: t.field({ type: OverwrittenLegacyUpdateWithoutPrematureOptimization }),
    }),
  });
