import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGloriousMistakes } from "./createWithoutGloriousMistakes";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutGloriousMistakes = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutGloriousMistakes")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutGloriousMistakes] }),
    }),
  });
