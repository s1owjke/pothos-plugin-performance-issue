import { builder } from "src/builder";

import { EmotionalSupportTableWhere } from "./where";

export const EmotionalSupportTableWhereRelationList = builder.inputRef<any>("EmotionalSupportTableWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: EmotionalSupportTableWhere, required: false }),
    every: t.field({ type: EmotionalSupportTableWhere, required: false }),
    none: t.field({ type: EmotionalSupportTableWhere, required: false }),
  }),
});
