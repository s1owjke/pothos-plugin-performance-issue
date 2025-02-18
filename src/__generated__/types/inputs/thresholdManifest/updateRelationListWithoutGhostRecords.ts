import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGhostRecords } from "./createWithoutGhostRecords";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutGhostRecords = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutGhostRecords")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutGhostRecords] }),
    }),
  });
