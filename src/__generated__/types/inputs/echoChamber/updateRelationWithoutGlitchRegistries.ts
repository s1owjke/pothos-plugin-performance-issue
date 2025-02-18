import { builder } from "src/builder";

import { EchoChamberCreateWithoutGlitchRegistries } from "./createWithoutGlitchRegistries";
import { EchoChamberUpdateWithoutGlitchRegistries } from "./updateWithoutGlitchRegistries";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberUpdateRelationWithoutGlitchRegistries = builder.inputRef<any>("EchoChamberUpdateRelationWithoutGlitchRegistries").implement({
  fields: (t) => ({
    connect: t.field({ type: EchoChamberWhereUnique }),
    disconnect: t.field({ type: EchoChamberWhereUnique }),
    create: t.field({ type: EchoChamberCreateWithoutGlitchRegistries }),
    update: t.field({ type: EchoChamberUpdateWithoutGlitchRegistries }),
  }),
});
