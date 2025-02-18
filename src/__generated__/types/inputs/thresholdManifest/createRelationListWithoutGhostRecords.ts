import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGhostRecords } from "./createWithoutGhostRecords";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutGhostRecords = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutGhostRecords")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutGhostRecords] }),
    }),
  });
