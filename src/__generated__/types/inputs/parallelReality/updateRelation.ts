import { builder } from "src/builder";

import { ParallelRealityCreate } from "./create";
import { ParallelRealityUpdate } from "./update";
import { ParallelRealityWhereUnique } from "./whereUnique";

export const ParallelRealityUpdateRelation = builder.inputRef<any>("ParallelRealityUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ParallelRealityWhereUnique }),
    disconnect: t.field({ type: ParallelRealityWhereUnique }),
    create: t.field({ type: ParallelRealityCreate }),
    update: t.field({ type: ParallelRealityUpdate }),
  }),
});
