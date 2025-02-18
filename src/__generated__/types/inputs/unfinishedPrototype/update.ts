import { builder } from "src/builder";

import { ClassifiedSillinessUpdateRelationWithoutUnfinishedPrototypes } from "../classifiedSilliness/updateRelationWithoutUnfinishedPrototypes";

export const UnfinishedPrototypeUpdate = builder.inputRef<any>("UnfinishedPrototypeUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    classifiedSilliness: t.field({
      type: ClassifiedSillinessUpdateRelationWithoutUnfinishedPrototypes,
      required: false,
    }),
  }),
});
