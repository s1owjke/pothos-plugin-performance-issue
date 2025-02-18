import { builder } from "src/builder";

import { DoomedExperimentCreate } from "./create";
import { DoomedExperimentWhereUnique } from "./whereUnique";

export const DoomedExperimentCreateRelation = builder.inputRef<any>("DoomedExperimentCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: DoomedExperimentWhereUnique }),
    create: t.field({ type: DoomedExperimentCreate }),
  }),
});
