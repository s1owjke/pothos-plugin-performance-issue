import { builder } from "src/builder";

import { GlitchRegistryCreate } from "./create";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelation = builder.inputRef<any>("GlitchRegistryCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: GlitchRegistryWhereUnique }),
    create: t.field({ type: GlitchRegistryCreate }),
  }),
});
