import { builder } from "src/builder";

import { EndlessLoopCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { EndlessLoopWhereUnique } from "./whereUnique";

export const EndlessLoopCreateRelationWithoutGravityOverride = builder.inputRef<any>("EndlessLoopCreateRelationWithoutGravityOverride").implement({
  fields: (t) => ({
    connect: t.field({ type: EndlessLoopWhereUnique }),
    create: t.field({ type: EndlessLoopCreateWithoutGravityOverride }),
  }),
});
