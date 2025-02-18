import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("TimeTravelLogUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TimeTravelLogWhereUnique] }),
      set: t.field({ type: [TimeTravelLogWhereUnique] }),
      disconnect: t.field({ type: [TimeTravelLogWhereUnique] }),
      create: t.field({ type: [TimeTravelLogCreateWithoutThresholdManifest] }),
    }),
  });
