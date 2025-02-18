import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { ConspiracyDraftUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("ConspiracyDraftUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ConspiracyDraftWhereUnique }),
      disconnect: t.field({ type: ConspiracyDraftWhereUnique }),
      create: t.field({ type: ConspiracyDraftCreateWithoutThresholdManifest }),
      update: t.field({ type: ConspiracyDraftUpdateWithoutThresholdManifest }),
    }),
  });
