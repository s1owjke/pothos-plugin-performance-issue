import { builder } from "src/builder";

import { GravityOverrideCreate } from "./create";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationList = builder.inputRef<any>("GravityOverrideUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [GravityOverrideWhereUnique] }),
    set: t.field({ type: [GravityOverrideWhereUnique] }),
    disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
    create: t.field({ type: [GravityOverrideCreate] }),
  }),
});
