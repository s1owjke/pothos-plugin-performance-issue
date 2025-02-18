import { builder } from "src/builder";

import { DoomedExperimentCreate } from "./create";
import { DoomedExperimentUpdate } from "./update";
import { DoomedExperimentWhereUnique } from "./whereUnique";

export const DoomedExperimentUpdateRelation = builder.inputRef<any>("DoomedExperimentUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: DoomedExperimentWhereUnique }),
    disconnect: t.field({ type: DoomedExperimentWhereUnique }),
    create: t.field({ type: DoomedExperimentCreate }),
    update: t.field({ type: DoomedExperimentUpdate }),
  }),
});
