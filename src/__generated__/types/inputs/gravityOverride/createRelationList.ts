import { builder } from "src/builder";

import { GravityOverrideCreate } from "./create";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationList = builder.inputRef<any>("GravityOverrideCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [GravityOverrideWhereUnique] }),
    create: t.field({ type: [GravityOverrideCreate] }),
  }),
});
