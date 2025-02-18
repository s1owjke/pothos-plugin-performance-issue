import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutInfiniteUndo } from "./createWithoutInfiniteUndo";
import { ThresholdManifestUpdateWithoutInfiniteUndo } from "./updateWithoutInfiniteUndo";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutInfiniteUndo = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutInfiniteUndo")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutInfiniteUndo }),
      update: t.field({ type: ThresholdManifestUpdateWithoutInfiniteUndo }),
    }),
  });
