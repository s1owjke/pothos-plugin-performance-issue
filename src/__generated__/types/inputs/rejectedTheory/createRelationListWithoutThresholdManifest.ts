import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("RejectedTheoryCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RejectedTheoryWhereUnique] }),
      create: t.field({ type: [RejectedTheoryCreateWithoutThresholdManifest] }),
    }),
  });
