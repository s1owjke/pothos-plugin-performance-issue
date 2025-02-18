import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutConspiracyDrafts } from "./createWithoutConspiracyDrafts";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutConspiracyDrafts = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutConspiracyDrafts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutConspiracyDrafts] }),
    }),
  });
