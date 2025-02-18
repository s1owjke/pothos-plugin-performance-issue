import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutRejectedTheories } from "./createWithoutRejectedTheories";
import { ThresholdManifestUpdateWithoutRejectedTheories } from "./updateWithoutRejectedTheories";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutRejectedTheories = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutRejectedTheories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutRejectedTheories }),
      update: t.field({ type: ThresholdManifestUpdateWithoutRejectedTheories }),
    }),
  });
