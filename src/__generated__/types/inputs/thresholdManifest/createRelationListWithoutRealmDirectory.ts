import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutRealmDirectory } from "./createWithoutRealmDirectory";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutRealmDirectory = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutRealmDirectory")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutRealmDirectory] }),
    }),
  });
