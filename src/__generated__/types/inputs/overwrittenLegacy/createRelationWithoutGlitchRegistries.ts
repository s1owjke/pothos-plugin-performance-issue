import { builder } from "src/builder";

import { OverwrittenLegacyCreateWithoutGlitchRegistries } from "./createWithoutGlitchRegistries";
import { OverwrittenLegacyWhereUnique } from "./whereUnique";

export const OverwrittenLegacyCreateRelationWithoutGlitchRegistries = builder
  .inputRef<any>("OverwrittenLegacyCreateRelationWithoutGlitchRegistries")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: OverwrittenLegacyWhereUnique }),
      create: t.field({ type: OverwrittenLegacyCreateWithoutGlitchRegistries }),
    }),
  });
