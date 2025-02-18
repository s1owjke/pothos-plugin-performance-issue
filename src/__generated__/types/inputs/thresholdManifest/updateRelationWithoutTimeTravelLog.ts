import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutTimeTravelLog } from "./createWithoutTimeTravelLog";
import { ThresholdManifestUpdateWithoutTimeTravelLog } from "./updateWithoutTimeTravelLog";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutTimeTravelLog = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutTimeTravelLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutTimeTravelLog }),
      update: t.field({ type: ThresholdManifestUpdateWithoutTimeTravelLog }),
    }),
  });
