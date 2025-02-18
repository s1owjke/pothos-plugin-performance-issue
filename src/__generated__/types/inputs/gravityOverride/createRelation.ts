import { builder } from "src/builder";

import { GravityOverrideCreate } from "./create";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelation = builder.inputRef<any>("GravityOverrideCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: GravityOverrideWhereUnique }),
    create: t.field({ type: GravityOverrideCreate }),
  }),
});
