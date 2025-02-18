import { builder } from "src/builder";

import { ClassifiedSillinessCreate } from "./create";
import { ClassifiedSillinessUpdate } from "./update";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessUpdateRelation = builder.inputRef<any>("ClassifiedSillinessUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ClassifiedSillinessWhereUnique }),
    disconnect: t.field({ type: ClassifiedSillinessWhereUnique }),
    create: t.field({ type: ClassifiedSillinessCreate }),
    update: t.field({ type: ClassifiedSillinessUpdate }),
  }),
});
