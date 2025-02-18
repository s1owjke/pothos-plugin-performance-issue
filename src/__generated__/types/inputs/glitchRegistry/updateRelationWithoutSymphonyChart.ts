import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { GlitchRegistryUpdateWithoutSymphonyChart } from "./updateWithoutSymphonyChart";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationWithoutSymphonyChart = builder.inputRef<any>("GlitchRegistryUpdateRelationWithoutSymphonyChart").implement({
  fields: (t) => ({
    connect: t.field({ type: GlitchRegistryWhereUnique }),
    disconnect: t.field({ type: GlitchRegistryWhereUnique }),
    create: t.field({ type: GlitchRegistryCreateWithoutSymphonyChart }),
    update: t.field({ type: GlitchRegistryUpdateWithoutSymphonyChart }),
  }),
});
