import { builder } from "src/builder";

import { ParallelRealityCreate } from "./create";
import { ParallelRealityWhereUnique } from "./whereUnique";

export const ParallelRealityCreateRelationList = builder.inputRef<any>("ParallelRealityCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ParallelRealityWhereUnique] }),
    create: t.field({ type: [ParallelRealityCreate] }),
  }),
});
