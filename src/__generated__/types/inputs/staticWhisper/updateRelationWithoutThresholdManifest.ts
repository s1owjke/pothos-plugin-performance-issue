import { builder } from "src/builder";

import { StaticWhisperCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { StaticWhisperUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { StaticWhisperWhereUnique } from "./whereUnique";

export const StaticWhisperUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("StaticWhisperUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: StaticWhisperWhereUnique }),
      disconnect: t.field({ type: StaticWhisperWhereUnique }),
      create: t.field({ type: StaticWhisperCreateWithoutThresholdManifest }),
      update: t.field({ type: StaticWhisperUpdateWithoutThresholdManifest }),
    }),
  });
