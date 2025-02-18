import { builder } from "src/builder";

import { EndlessLoopCreate } from "./create";
import { EndlessLoopWhereUnique } from "./whereUnique";

export const EndlessLoopCreateRelation = builder.inputRef<any>("EndlessLoopCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: EndlessLoopWhereUnique }),
    create: t.field({ type: EndlessLoopCreate }),
  }),
});
