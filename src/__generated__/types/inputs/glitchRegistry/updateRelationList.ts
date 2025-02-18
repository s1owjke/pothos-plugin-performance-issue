import { builder } from "src/builder";

import { GlitchRegistryCreate } from "./create";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationList = builder.inputRef<any>("GlitchRegistryUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [GlitchRegistryWhereUnique] }),
    set: t.field({ type: [GlitchRegistryWhereUnique] }),
    disconnect: t.field({ type: [GlitchRegistryWhereUnique] }),
    create: t.field({ type: [GlitchRegistryCreate] }),
  }),
});
