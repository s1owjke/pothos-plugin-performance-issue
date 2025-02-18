import { builder } from "src/builder";

import { PendingDisasterCreateWithoutGlitchRegistry } from "./createWithoutGlitchRegistry";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterCreateRelationWithoutGlitchRegistry = builder
  .inputRef<any>("PendingDisasterCreateRelationWithoutGlitchRegistry")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PendingDisasterWhereUnique }),
      create: t.field({ type: PendingDisasterCreateWithoutGlitchRegistry }),
    }),
  });
