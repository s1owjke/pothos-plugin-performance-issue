import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutInfiniteUndo } from "./createWithoutInfiniteUndo";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutInfiniteUndo = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutInfiniteUndo")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutInfiniteUndo] }),
    }),
  });
