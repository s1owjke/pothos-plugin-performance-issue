import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { TimeTravelLogUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("TimeTravelLogUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: TimeTravelLogWhereUnique }),
      disconnect: t.field({ type: TimeTravelLogWhereUnique }),
      create: t.field({ type: TimeTravelLogCreateWithoutThresholdManifest }),
      update: t.field({ type: TimeTravelLogUpdateWithoutThresholdManifest }),
    }),
  });
