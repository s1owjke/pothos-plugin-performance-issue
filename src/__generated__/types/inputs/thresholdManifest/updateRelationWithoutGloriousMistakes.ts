import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGloriousMistakes } from "./createWithoutGloriousMistakes";
import { ThresholdManifestUpdateWithoutGloriousMistakes } from "./updateWithoutGloriousMistakes";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutGloriousMistakes = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutGloriousMistakes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutGloriousMistakes }),
      update: t.field({ type: ThresholdManifestUpdateWithoutGloriousMistakes }),
    }),
  });
