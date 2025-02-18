import { builder } from "src/builder";

import { PrematureOptimizationCreate } from "./create";
import { PrematureOptimizationWhereUnique } from "./whereUnique";

export const PrematureOptimizationCreateRelation = builder.inputRef<any>("PrematureOptimizationCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: PrematureOptimizationWhereUnique }),
    create: t.field({ type: PrematureOptimizationCreate }),
  }),
});
