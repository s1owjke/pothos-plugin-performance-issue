import { builder } from "src/builder";

import { PendingDisasterCreateWithoutGlitchRegistry } from "./createWithoutGlitchRegistry";
import { PendingDisasterUpdateWithoutGlitchRegistry } from "./updateWithoutGlitchRegistry";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterUpdateRelationWithoutGlitchRegistry = builder
  .inputRef<any>("PendingDisasterUpdateRelationWithoutGlitchRegistry")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PendingDisasterWhereUnique }),
      disconnect: t.field({ type: PendingDisasterWhereUnique }),
      create: t.field({ type: PendingDisasterCreateWithoutGlitchRegistry }),
      update: t.field({ type: PendingDisasterUpdateWithoutGlitchRegistry }),
    }),
  });
