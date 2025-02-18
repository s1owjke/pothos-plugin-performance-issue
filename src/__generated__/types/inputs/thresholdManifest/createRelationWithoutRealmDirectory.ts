import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutRealmDirectory } from "./createWithoutRealmDirectory";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutRealmDirectory = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutRealmDirectory")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutRealmDirectory }),
    }),
  });
