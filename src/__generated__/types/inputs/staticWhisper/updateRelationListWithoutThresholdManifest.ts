import { builder } from "src/builder";

import { StaticWhisperCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { StaticWhisperWhereUnique } from "./whereUnique";

export const StaticWhisperUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("StaticWhisperUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [StaticWhisperWhereUnique] }),
      set: t.field({ type: [StaticWhisperWhereUnique] }),
      disconnect: t.field({ type: [StaticWhisperWhereUnique] }),
      create: t.field({ type: [StaticWhisperCreateWithoutThresholdManifest] }),
    }),
  });
