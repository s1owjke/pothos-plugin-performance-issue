import { builder } from "src/builder";

import { EndlessLoopCreateWithoutPocketUniverses } from "./createWithoutPocketUniverses";
import { EndlessLoopUpdateWithoutPocketUniverses } from "./updateWithoutPocketUniverses";
import { EndlessLoopWhereUnique } from "./whereUnique";

export const EndlessLoopUpdateRelationWithoutPocketUniverses = builder.inputRef<any>("EndlessLoopUpdateRelationWithoutPocketUniverses").implement({
  fields: (t) => ({
    connect: t.field({ type: EndlessLoopWhereUnique }),
    disconnect: t.field({ type: EndlessLoopWhereUnique }),
    create: t.field({ type: EndlessLoopCreateWithoutPocketUniverses }),
    update: t.field({ type: EndlessLoopUpdateWithoutPocketUniverses }),
  }),
});
