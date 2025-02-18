import { builder } from "src/builder";

import { PrematureOptimizationCreateWithoutOverwrittenLegacies } from "./createWithoutOverwrittenLegacies";
import { PrematureOptimizationWhereUnique } from "./whereUnique";

export const PrematureOptimizationUpdateRelationListWithoutOverwrittenLegacies = builder
  .inputRef<any>("PrematureOptimizationUpdateRelationListWithoutOverwrittenLegacies")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PrematureOptimizationWhereUnique] }),
      set: t.field({ type: [PrematureOptimizationWhereUnique] }),
      disconnect: t.field({ type: [PrematureOptimizationWhereUnique] }),
      create: t.field({ type: [PrematureOptimizationCreateWithoutOverwrittenLegacies] }),
    }),
  });
