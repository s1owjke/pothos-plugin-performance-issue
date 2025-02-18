import { builder } from "src/builder";

import { StaticWhisperCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { StaticWhisperWhereUnique } from "./whereUnique";

export const StaticWhisperCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("StaticWhisperCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: StaticWhisperWhereUnique }),
      create: t.field({ type: StaticWhisperCreateWithoutThresholdManifest }),
    }),
  });
