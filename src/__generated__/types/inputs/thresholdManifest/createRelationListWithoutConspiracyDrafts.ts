import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutConspiracyDrafts } from "./createWithoutConspiracyDrafts";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutConspiracyDrafts = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutConspiracyDrafts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutConspiracyDrafts] }),
    }),
  });
