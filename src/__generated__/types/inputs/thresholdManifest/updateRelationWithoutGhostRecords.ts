import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGhostRecords } from "./createWithoutGhostRecords";
import { ThresholdManifestUpdateWithoutGhostRecords } from "./updateWithoutGhostRecords";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutGhostRecords = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutGhostRecords")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutGhostRecords }),
      update: t.field({ type: ThresholdManifestUpdateWithoutGhostRecords }),
    }),
  });
