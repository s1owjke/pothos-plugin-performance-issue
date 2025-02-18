import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutTimeTravelLog } from "./createWithoutTimeTravelLog";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutTimeTravelLog = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutTimeTravelLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutTimeTravelLog }),
    }),
  });
