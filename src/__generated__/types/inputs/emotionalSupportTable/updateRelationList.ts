import { builder } from "src/builder";

import { EmotionalSupportTableCreate } from "./create";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableUpdateRelationList = builder.inputRef<any>("EmotionalSupportTableUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
    set: t.field({ type: [EmotionalSupportTableWhereUnique] }),
    disconnect: t.field({ type: [EmotionalSupportTableWhereUnique] }),
    create: t.field({ type: [EmotionalSupportTableCreate] }),
  }),
});
