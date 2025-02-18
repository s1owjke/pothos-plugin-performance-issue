import { builder } from "src/builder";

import { ClassifiedSillinessCreate } from "./create";
import { ClassifiedSillinessWhereUnique } from "./whereUnique";

export const ClassifiedSillinessCreateRelation = builder.inputRef<any>("ClassifiedSillinessCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: ClassifiedSillinessWhereUnique }),
    create: t.field({ type: ClassifiedSillinessCreate }),
  }),
});
