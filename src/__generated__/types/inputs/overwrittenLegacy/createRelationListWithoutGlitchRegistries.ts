import { builder } from "src/builder";

import { OverwrittenLegacyCreateWithoutGlitchRegistries } from "./createWithoutGlitchRegistries";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyCreateRelationListWithoutGlitchRegistries = builder
  .inputRef<any>("OverwrittenLegacyCreateRelationListWithoutGlitchRegistries")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [OverwrittenLegacyWhereUnique] }),
      create: t.field({ type: [OverwrittenLegacyCreateWithoutGlitchRegistries] }),
    }),
  });
