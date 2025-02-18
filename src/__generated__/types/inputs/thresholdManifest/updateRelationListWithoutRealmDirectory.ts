import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutRealmDirectory } from "./createWithoutRealmDirectory";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutRealmDirectory = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutRealmDirectory")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutRealmDirectory] }),
    }),
  });
