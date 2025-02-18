import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutInfiniteUndo } from "./createWithoutInfiniteUndo";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutInfiniteUndo = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutInfiniteUndo")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutInfiniteUndo] }),
    }),
  });
