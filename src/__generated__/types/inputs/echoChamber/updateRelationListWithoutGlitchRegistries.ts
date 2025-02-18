import { builder } from "src/builder";

import { EchoChamberCreateWithoutGlitchRegistries } from "./createWithoutGlitchRegistries";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberUpdateRelationListWithoutGlitchRegistries = builder
  .inputRef<any>("EchoChamberUpdateRelationListWithoutGlitchRegistries")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EchoChamberWhereUnique] }),
      set: t.field({ type: [EchoChamberWhereUnique] }),
      disconnect: t.field({ type: [EchoChamberWhereUnique] }),
      create: t.field({ type: [EchoChamberCreateWithoutGlitchRegistries] }),
    }),
  });
