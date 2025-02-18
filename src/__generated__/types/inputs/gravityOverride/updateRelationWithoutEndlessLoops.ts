import { builder } from "src/builder";

import { GravityOverrideCreateWithoutEndlessLoops } from "./createWithoutEndlessLoops";
import { GravityOverrideUpdateWithoutEndlessLoops } from "./updateWithoutEndlessLoops";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutEndlessLoops = builder.inputRef<any>("GravityOverrideUpdateRelationWithoutEndlessLoops").implement({
  fields: (t) => ({
    connect: t.field({ type: GravityOverrideWhereUnique }),
    disconnect: t.field({ type: GravityOverrideWhereUnique }),
    create: t.field({ type: GravityOverrideCreateWithoutEndlessLoops }),
    update: t.field({ type: GravityOverrideUpdateWithoutEndlessLoops }),
  }),
});
