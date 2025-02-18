import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("TimeTravelLogCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TimeTravelLogWhereUnique] }),
      create: t.field({ type: [TimeTravelLogCreateWithoutThresholdManifest] }),
    }),
  });
