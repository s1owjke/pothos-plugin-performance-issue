import { builder } from "src/builder";

import { PrematureOptimizationCreate } from "./create";
import { PrematureOptimizationUpdate } from "./update";
import { PrematureOptimizationWhereUnique } from "./whereUnique";

export const PrematureOptimizationUpdateRelation = builder.inputRef<any>("PrematureOptimizationUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: PrematureOptimizationWhereUnique }),
    disconnect: t.field({ type: PrematureOptimizationWhereUnique }),
    create: t.field({ type: PrematureOptimizationCreate }),
    update: t.field({ type: PrematureOptimizationUpdate }),
  }),
});
