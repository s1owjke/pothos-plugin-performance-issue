import { builder } from "src/builder";

import { ClassifiedSillinessCreate } from "./create";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessUpdateRelationList = builder.inputRef<any>("ClassifiedSillinessUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
    set: t.field({ type: [ClassifiedSillinessWhereUnique] }),
    disconnect: t.field({ type: [ClassifiedSillinessWhereUnique] }),
    create: t.field({ type: [ClassifiedSillinessCreate] }),
  }),
});
