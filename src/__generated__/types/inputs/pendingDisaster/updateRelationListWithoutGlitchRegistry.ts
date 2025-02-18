import { builder } from "src/builder";

import { PendingDisasterCreateWithoutGlitchRegistry } from "./createWithoutGlitchRegistry";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterUpdateRelationListWithoutGlitchRegistry = builder
  .inputRef<any>("PendingDisasterUpdateRelationListWithoutGlitchRegistry")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PendingDisasterWhereUnique] }),
      set: t.field({ type: [PendingDisasterWhereUnique] }),
      disconnect: t.field({ type: [PendingDisasterWhereUnique] }),
      create: t.field({ type: [PendingDisasterCreateWithoutGlitchRegistry] }),
    }),
  });
