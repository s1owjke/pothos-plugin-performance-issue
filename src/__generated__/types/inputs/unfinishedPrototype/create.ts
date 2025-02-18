import { builder } from "src/builder";

import { ClassifiedSillinessCreateRelationWithoutUnfinishedPrototypes } from "../classifiedSilliness/createRelationWithoutUnfinishedPrototypes";

export const UnfinishedPrototypeCreate = builder.inputRef<any>("UnfinishedPrototypeCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    classifiedSilliness: t.field({
      type: ClassifiedSillinessCreateRelationWithoutUnfinishedPrototypes,
      required: true,
    }),
  }),
});
