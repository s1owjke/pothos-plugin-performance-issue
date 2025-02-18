import { builder } from "src/builder";

import { EndlessLoopCreate } from "./create";
import { EndlessLoopUpdate } from "./update";
import { EndlessLoopWhereUnique } from "./whereUnique";

export const EndlessLoopUpdateRelation = builder.inputRef<any>("EndlessLoopUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: EndlessLoopWhereUnique }),
    disconnect: t.field({ type: EndlessLoopWhereUnique }),
    create: t.field({ type: EndlessLoopCreate }),
    update: t.field({ type: EndlessLoopUpdate }),
  }),
});
