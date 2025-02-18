import { builder } from "src/builder";

import { EndlessLoopCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { EndlessLoopUpdateWithoutGravityOverride } from "./updateWithoutGravityOverride";
import { EndlessLoopWhereUnique } from "./whereUnique";

export const EndlessLoopUpdateRelationWithoutGravityOverride = builder.inputRef<any>("EndlessLoopUpdateRelationWithoutGravityOverride").implement({
  fields: (t) => ({
    connect: t.field({ type: EndlessLoopWhereUnique }),
    disconnect: t.field({ type: EndlessLoopWhereUnique }),
    create: t.field({ type: EndlessLoopCreateWithoutGravityOverride }),
    update: t.field({ type: EndlessLoopUpdateWithoutGravityOverride }),
  }),
});
