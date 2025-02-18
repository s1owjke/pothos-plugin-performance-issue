import { builder } from "src/builder";

import { DoomedExperimentWhere } from "./where";

export const DoomedExperimentWhereRelationList = builder.inputRef<any>("DoomedExperimentWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: DoomedExperimentWhere, required: false }),
    every: t.field({ type: DoomedExperimentWhere, required: false }),
    none: t.field({ type: DoomedExperimentWhere, required: false }),
  }),
});
