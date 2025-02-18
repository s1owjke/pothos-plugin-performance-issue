import { builder } from "src/builder";

import { ClassifiedSillinessCreate } from "./create";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessCreateRelationList = builder.inputRef<any>("ClassifiedSillinessCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
    create: t.field({ type: [ClassifiedSillinessCreate] }),
  }),
});
