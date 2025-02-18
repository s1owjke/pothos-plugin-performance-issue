import { builder } from "src/builder";

import { PrematureOptimizationCreateWithoutOverwrittenLegacies } from "./createWithoutOverwrittenLegacies";
import { PrematureOptimizationUpdateWithoutOverwrittenLegacies } from "./updateWithoutOverwrittenLegacies";
import { PrematureOptimizationWhereUnique } from "./whereUnique";

export const PrematureOptimizationUpdateRelationWithoutOverwrittenLegacies = builder
  .inputRef<any>("PrematureOptimizationUpdateRelationWithoutOverwrittenLegacies")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PrematureOptimizationWhereUnique }),
      disconnect: t.field({ type: PrematureOptimizationWhereUnique }),
      create: t.field({ type: PrematureOptimizationCreateWithoutOverwrittenLegacies }),
      update: t.field({ type: PrematureOptimizationUpdateWithoutOverwrittenLegacies }),
    }),
  });
