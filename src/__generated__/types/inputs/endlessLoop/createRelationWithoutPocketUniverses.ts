import { builder } from "src/builder";

import { EndlessLoopCreateWithoutPocketUniverses } from "./createWithoutPocketUniverses";
import { EndlessLoopWhereUnique } from "./whereUnique";

export const EndlessLoopCreateRelationWithoutPocketUniverses = builder.inputRef<any>("EndlessLoopCreateRelationWithoutPocketUniverses").implement({
  fields: (t) => ({
    connect: t.field({ type: EndlessLoopWhereUnique }),
    create: t.field({ type: EndlessLoopCreateWithoutPocketUniverses }),
  }),
});
