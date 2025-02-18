import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutTimeTravelLog } from "./createWithoutTimeTravelLog";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutTimeTravelLog = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutTimeTravelLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutTimeTravelLog] }),
    }),
  });
