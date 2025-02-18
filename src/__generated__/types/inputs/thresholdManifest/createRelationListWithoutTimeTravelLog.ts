import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutTimeTravelLog } from "./createWithoutTimeTravelLog";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutTimeTravelLog = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutTimeTravelLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutTimeTravelLog] }),
    }),
  });
