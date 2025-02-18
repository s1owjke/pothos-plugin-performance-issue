import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("ConspiracyDraftCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ConspiracyDraftWhereUnique] }),
      create: t.field({ type: [ConspiracyDraftCreateWithoutThresholdManifest] }),
    }),
  });
