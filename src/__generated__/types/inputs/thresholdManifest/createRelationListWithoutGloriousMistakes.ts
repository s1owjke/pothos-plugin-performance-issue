import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGloriousMistakes } from "./createWithoutGloriousMistakes";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutGloriousMistakes = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutGloriousMistakes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutGloriousMistakes] }),
    }),
  });
