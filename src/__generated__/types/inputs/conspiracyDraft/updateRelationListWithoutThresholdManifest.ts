import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("ConspiracyDraftUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ConspiracyDraftWhereUnique] }),
      set: t.field({ type: [ConspiracyDraftWhereUnique] }),
      disconnect: t.field({ type: [ConspiracyDraftWhereUnique] }),
      create: t.field({ type: [ConspiracyDraftCreateWithoutThresholdManifest] }),
    }),
  });
