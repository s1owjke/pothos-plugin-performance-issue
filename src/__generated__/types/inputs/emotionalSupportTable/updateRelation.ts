import { builder } from "src/builder";

import { EmotionalSupportTableCreate } from "./create";
import { EmotionalSupportTableUpdate } from "./update";
import { EmotionalSupportTableWhereUnique } from "./whereUnique";

export const EmotionalSupportTableUpdateRelation = builder.inputRef<any>("EmotionalSupportTableUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: EmotionalSupportTableWhereUnique }),
    disconnect: t.field({ type: EmotionalSupportTableWhereUnique }),
    create: t.field({ type: EmotionalSupportTableCreate }),
    update: t.field({ type: EmotionalSupportTableUpdate }),
  }),
});
