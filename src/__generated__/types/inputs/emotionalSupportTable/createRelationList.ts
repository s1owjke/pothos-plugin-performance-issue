import { builder } from "src/builder";

import { EmotionalSupportTableCreate } from "./create";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableCreateRelationList = builder.inputRef<any>("EmotionalSupportTableCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
    create: t.field({ type: [EmotionalSupportTableCreate] }),
  }),
});
