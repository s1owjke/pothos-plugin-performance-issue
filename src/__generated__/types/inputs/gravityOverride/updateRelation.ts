import { builder } from "src/builder";

import { GravityOverrideCreate } from "./create";
import { GravityOverrideUpdate } from "./update";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelation = builder.inputRef<any>("GravityOverrideUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: GravityOverrideWhereUnique }),
    disconnect: t.field({ type: GravityOverrideWhereUnique }),
    create: t.field({ type: GravityOverrideCreate }),
    update: t.field({ type: GravityOverrideUpdate }),
  }),
});
