import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutInfiniteUndo } from "./createWithoutInfiniteUndo";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutInfiniteUndo = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutInfiniteUndo")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutInfiniteUndo }),
    }),
  });
