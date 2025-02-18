import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGloriousMistakes } from "./createWithoutGloriousMistakes";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutGloriousMistakes = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutGloriousMistakes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutGloriousMistakes }),
    }),
  });
