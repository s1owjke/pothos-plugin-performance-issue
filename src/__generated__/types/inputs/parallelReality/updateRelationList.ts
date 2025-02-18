import { builder } from "src/builder";

import { ParallelRealityCreate } from "./create";
import { ParallelRealityWhereUnique } from "./whereUnique";

export const ParallelRealityUpdateRelationList = builder.inputRef<any>("ParallelRealityUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ParallelRealityWhereUnique] }),
    set: t.field({ type: [ParallelRealityWhereUnique] }),
    disconnect: t.field({ type: [ParallelRealityWhereUnique] }),
    create: t.field({ type: [ParallelRealityCreate] }),
  }),
});
