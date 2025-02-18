import { builder } from "src/builder";

import { PrematureOptimizationCreate } from "./create";
import { PrematureOptimizationWhereUnique } from "./whereUnique";

export const PrematureOptimizationUpdateRelationList = builder.inputRef<any>("PrematureOptimizationUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [PrematureOptimizationWhereUnique] }),
    set: t.field({ type: [PrematureOptimizationWhereUnique] }),
    disconnect: t.field({ type: [PrematureOptimizationWhereUnique] }),
    create: t.field({ type: [PrematureOptimizationCreate] }),
  }),
});
