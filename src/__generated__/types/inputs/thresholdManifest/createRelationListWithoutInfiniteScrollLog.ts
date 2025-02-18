import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutInfiniteScrollLog } from "./createWithoutInfiniteScrollLog";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutInfiniteScrollLog = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutInfiniteScrollLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutInfiniteScrollLog] }),
    }),
  });
