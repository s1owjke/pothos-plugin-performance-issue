import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutRejectedTheories } from "./createWithoutRejectedTheories";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutRejectedTheories = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutRejectedTheories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutRejectedTheories] }),
    }),
  });
