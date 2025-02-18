import { builder } from "src/builder";

import { GlitchRegistryCreate } from "./create";
import { GlitchRegistryUpdate } from "./update";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelation = builder.inputRef<any>("GlitchRegistryUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: GlitchRegistryWhereUnique }),
    disconnect: t.field({ type: GlitchRegistryWhereUnique }),
    create: t.field({ type: GlitchRegistryCreate }),
    update: t.field({ type: GlitchRegistryUpdate }),
  }),
});
