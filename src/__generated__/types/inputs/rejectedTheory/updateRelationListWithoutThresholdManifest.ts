import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("RejectedTheoryUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RejectedTheoryWhereUnique] }),
      set: t.field({ type: [RejectedTheoryWhereUnique] }),
      disconnect: t.field({ type: [RejectedTheoryWhereUnique] }),
      create: t.field({ type: [RejectedTheoryCreateWithoutThresholdManifest] }),
    }),
  });
