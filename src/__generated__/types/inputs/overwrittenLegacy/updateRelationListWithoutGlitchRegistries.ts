import { builder } from "src/builder";

import { OverwrittenLegacyCreateWithoutGlitchRegistries } from "./createWithoutGlitchRegistries";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyUpdateRelationListWithoutGlitchRegistries = builder
  .inputRef<any>("OverwrittenLegacyUpdateRelationListWithoutGlitchRegistries")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [OverwrittenLegacyWhereUnique] }),
      set: t.field({ type: [OverwrittenLegacyWhereUnique] }),
      disconnect: t.field({ type: [OverwrittenLegacyWhereUnique] }),
      create: t.field({ type: [OverwrittenLegacyCreateWithoutGlitchRegistries] }),
    }),
  });
