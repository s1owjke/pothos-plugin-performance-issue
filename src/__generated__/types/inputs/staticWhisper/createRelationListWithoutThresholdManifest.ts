import { builder } from "src/builder";

import { StaticWhisperCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { StaticWhisperWhereUnique } from "./whereUnique";

export const StaticWhisperCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("StaticWhisperCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [StaticWhisperWhereUnique] }),
      create: t.field({ type: [StaticWhisperCreateWithoutThresholdManifest] }),
    }),
  });
