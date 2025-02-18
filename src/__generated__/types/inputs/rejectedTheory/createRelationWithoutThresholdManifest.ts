import { builder } from "src/builder";

import { RejectedTheoryCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { RejectedTheoryWhereUnique } from "./whereUnique";

export const RejectedTheoryCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("RejectedTheoryCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RejectedTheoryWhereUnique }),
      create: t.field({ type: RejectedTheoryCreateWithoutThresholdManifest }),
    }),
  });
