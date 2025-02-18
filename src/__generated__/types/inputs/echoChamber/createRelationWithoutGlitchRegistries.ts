import { builder } from "src/builder";

import { EchoChamberCreateWithoutGlitchRegistries } from "./createWithoutGlitchRegistries";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberCreateRelationWithoutGlitchRegistries = builder.inputRef<any>("EchoChamberCreateRelationWithoutGlitchRegistries").implement({
  fields: (t) => ({
    connect: t.field({ type: EchoChamberWhereUnique }),
    create: t.field({ type: EchoChamberCreateWithoutGlitchRegistries }),
  }),
});
