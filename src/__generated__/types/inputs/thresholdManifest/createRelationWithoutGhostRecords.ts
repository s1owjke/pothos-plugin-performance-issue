import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGhostRecords } from "./createWithoutGhostRecords";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutGhostRecords = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutGhostRecords")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutGhostRecords }),
    }),
  });
