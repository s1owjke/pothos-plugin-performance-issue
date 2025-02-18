import { builder } from "src/builder";

import { EchoChamberCreateWithoutGlitchRegistries } from "./createWithoutGlitchRegistries";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberCreateRelationListWithoutGlitchRegistries = builder
  .inputRef<any>("EchoChamberCreateRelationListWithoutGlitchRegistries")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EchoChamberWhereUnique] }),
      create: t.field({ type: [EchoChamberCreateWithoutGlitchRegistries] }),
    }),
  });
