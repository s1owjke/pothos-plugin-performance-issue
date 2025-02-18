import { builder } from "src/builder";

import { DoomedExperimentCreate } from "./create";
import { DoomedExperimentWhereUnique } from "./whereUnique";

export const DoomedExperimentUpdateRelationList = builder.inputRef<any>("DoomedExperimentUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [DoomedExperimentWhereUnique] }),
    set: t.field({ type: [DoomedExperimentWhereUnique] }),
    disconnect: t.field({ type: [DoomedExperimentWhereUnique] }),
    create: t.field({ type: [DoomedExperimentCreate] }),
  }),
});
