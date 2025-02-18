import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { RejectedTheoryUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("RejectedTheoryUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RejectedTheoryWhereUnique }),
      disconnect: t.field({ type: RejectedTheoryWhereUnique }),
      create: t.field({ type: RejectedTheoryCreateWithoutThresholdManifest }),
      update: t.field({ type: RejectedTheoryUpdateWithoutThresholdManifest }),
    }),
  });
