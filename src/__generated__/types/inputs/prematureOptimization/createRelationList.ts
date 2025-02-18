import { builder } from "src/builder";

import { PrematureOptimizationCreate } from "./create";
import { PrematureOptimizationWhereUnique } from "./whereUnique";

export const PrematureOptimizationCreateRelationList = builder.inputRef<any>("PrematureOptimizationCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [PrematureOptimizationWhereUnique] }),
    create: t.field({ type: [PrematureOptimizationCreate] }),
  }),
});
