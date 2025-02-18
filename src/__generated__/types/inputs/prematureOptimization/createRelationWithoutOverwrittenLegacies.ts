import { builder } from "src/builder";

import { PrematureOptimizationCreateWithoutOverwrittenLegacies } from "./createWithoutOverwrittenLegacies";
import { PrematureOptimizationWhereUnique } from "./whereUnique";

export const PrematureOptimizationCreateRelationWithoutOverwrittenLegacies = builder
  .inputRef<any>("PrematureOptimizationCreateRelationWithoutOverwrittenLegacies")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PrematureOptimizationWhereUnique }),
      create: t.field({ type: PrematureOptimizationCreateWithoutOverwrittenLegacies }),
    }),
  });
