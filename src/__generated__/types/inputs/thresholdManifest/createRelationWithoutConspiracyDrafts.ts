import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutConspiracyDrafts } from "./createWithoutConspiracyDrafts";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutConspiracyDrafts = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutConspiracyDrafts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutConspiracyDrafts }),
    }),
  });
