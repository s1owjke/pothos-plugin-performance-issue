import { builder } from "src/builder";

import { ParallelRealityCreate } from "./create";
import { ParallelRealityWhereUnique } from "./whereUnique";

export const ParallelRealityCreateRelation = builder.inputRef<any>("ParallelRealityCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ParallelRealityWhereUnique }),
    create: t.field({ type: ParallelRealityCreate }),
  }),
});
