import { builder } from "src/builder";

import { ConspiracyDraftCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { ConspiracyDraftWhereUnique } from "./whereUnique";

export const ConspiracyDraftCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("ConspiracyDraftCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ConspiracyDraftWhereUnique }),
      create: t.field({ type: ConspiracyDraftCreateWithoutThresholdManifest }),
    }),
  });
