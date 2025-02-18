import { builder } from "src/builder";

import { EmotionalSupportTableCreate } from "./create";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableCreateRelation = builder.inputRef<any>("EmotionalSupportTableCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: EmotionalSupportTableWhereUnique }),
    create: t.field({ type: EmotionalSupportTableCreate }),
  }),
});
