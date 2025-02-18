import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutClassifiedSillinesses } from "./createWithoutClassifiedSillinesses";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutClassifiedSillinesses = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutClassifiedSillinesses")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutClassifiedSillinesses] }),
    }),
  });
