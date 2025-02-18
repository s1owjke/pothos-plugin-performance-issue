import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutInfiniteScrollLog } from "./createWithoutInfiniteScrollLog";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutInfiniteScrollLog = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutInfiniteScrollLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutInfiniteScrollLog }),
    }),
  });
