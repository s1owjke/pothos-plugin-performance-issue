import { builder } from "src/builder";

import { OverwrittenLegacyCreateWithoutPrematureOptimization } from "./createWithoutPrematureOptimization";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyCreateRelationListWithoutPrematureOptimization = builder
  .inputRef<any>("OverwrittenLegacyCreateRelationListWithoutPrematureOptimization")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [OverwrittenLegacyWhereUnique] }),
      create: t.field({ type: [OverwrittenLegacyCreateWithoutPrematureOptimization] }),
    }),
  });
