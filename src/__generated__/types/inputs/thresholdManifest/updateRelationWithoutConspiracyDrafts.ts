import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutConspiracyDrafts } from "./createWithoutConspiracyDrafts";
import { ThresholdManifestUpdateWithoutConspiracyDrafts } from "./updateWithoutConspiracyDrafts";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutConspiracyDrafts = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutConspiracyDrafts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutConspiracyDrafts }),
      update: t.field({ type: ThresholdManifestUpdateWithoutConspiracyDrafts }),
    }),
  });
