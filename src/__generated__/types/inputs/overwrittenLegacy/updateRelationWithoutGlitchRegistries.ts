import { builder } from "src/builder";

import { OverwrittenLegacyCreateWithoutGlitchRegistries } from "./createWithoutGlitchRegistries";
import { OverwrittenLegacyUpdateWithoutGlitchRegistries } from "./updateWithoutGlitchRegistries";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyUpdateRelationWithoutGlitchRegistries = builder
  .inputRef<any>("OverwrittenLegacyUpdateRelationWithoutGlitchRegistries")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: OverwrittenLegacyWhereUnique }),
      disconnect: t.field({ type: OverwrittenLegacyWhereUnique }),
      create: t.field({ type: OverwrittenLegacyCreateWithoutGlitchRegistries }),
      update: t.field({ type: OverwrittenLegacyUpdateWithoutGlitchRegistries }),
    }),
  });
