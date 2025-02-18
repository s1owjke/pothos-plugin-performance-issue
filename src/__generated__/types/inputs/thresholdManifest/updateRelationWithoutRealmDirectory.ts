import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutRealmDirectory } from "./createWithoutRealmDirectory";
import { ThresholdManifestUpdateWithoutRealmDirectory } from "./updateWithoutRealmDirectory";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutRealmDirectory = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutRealmDirectory")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutRealmDirectory }),
      update: t.field({ type: ThresholdManifestUpdateWithoutRealmDirectory }),
    }),
  });
