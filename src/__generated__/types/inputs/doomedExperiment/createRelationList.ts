import { builder } from "src/builder";

import { DoomedExperimentCreate } from "./create";
import { DoomedExperimentWhereUnique } from "./whereUnique";

export const DoomedExperimentCreateRelationList = builder.inputRef<any>("DoomedExperimentCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [DoomedExperimentWhereUnique] }),
    create: t.field({ type: [DoomedExperimentCreate] }),
  }),
});
