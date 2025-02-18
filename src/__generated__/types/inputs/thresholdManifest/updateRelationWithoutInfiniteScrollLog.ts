import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutInfiniteScrollLog } from "./createWithoutInfiniteScrollLog";
import { ThresholdManifestUpdateWithoutInfiniteScrollLog } from "./updateWithoutInfiniteScrollLog";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutInfiniteScrollLog = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutInfiniteScrollLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutInfiniteScrollLog }),
      update: t.field({ type: ThresholdManifestUpdateWithoutInfiniteScrollLog }),
    }),
  });
